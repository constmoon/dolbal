import React, { Component } from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import { MAPBOX } from '../settings';

/* 
돌발정보조회(서울시){
	성공시: 받은좌표 변환(카카오){
    성공시: 변환된 좌표로 mapbox에 앵커 뿌리기
	}
}
*/

// TODO: class component로 선커밋 후 functional component로 변경
class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 37.565,
      longitude: 126.986,
      zoom: 10
    },
    showPopup: false,
  };

  // TODO: mapStyle에 따라 property id 이름이 달라짐
  // 현 스타일에서 지하철역이 표기되지 않는 문제 해결해야함
  // addControl로 언어가 바뀌는 게 아닌 setLayoutProperty로만 바뀌고 있는 문제도 해결해야
  _onLoad = (event) => {
    const map = event.target;
    map.addControl(new MapboxLanguage({
      defaultLanguage: 'ko',
    }));
    console.log(map.getStyle().layers)
    map.setLayoutProperty('place-city-lg-s', 'text-field', '{name_ko}' );
  }


  render() {
    const { viewport, showPopup } = this.state;
    const { accidentList } = this.props;
    return (
      <div className="map-container">
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={MAPBOX.ACCESS_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
          onLoad={this._onLoad}
          className="map">
          <div style={{ position: 'absolute', right: 0, padding: '10px' }}>
            <NavigationControl />
          </div>
          {accidentList.map(({ longitude, latitude }, index) => (
            <Marker
              key={index}
              longitude={longitude}
              latitude={latitude}
            >
              <span className="marker" />
            </Marker>
          ))}
        </ReactMapGL>
        <style jsx>{`
          .map-container {
            width: 70%;
            height: 100%;
            margin-left: 20px;
          }
          .map {
            position: relative;
          }
          .marker {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #f00;
          }
      `}</style>
      </div>
    );
  }
}

export default Map;