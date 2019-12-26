import React, { Component } from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import SETTINGS from '../settings';

/* 
돌발정보조회(서울시){
	성공시: 받은좌표 변환(카카오){
    성공시: 변환된 좌표로 mapbox에 앵커 뿌리기
	}
}
*/
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

  render() {
    const { viewport, showPopup } = this.state;
    return (
      <div className="map-container">
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxApiAccessToken={SETTINGS.MAPBOX.ACCESS_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
          className="map">
          <div style={{ position: 'absolute', right: 0, padding: '10px' }}>
            <NavigationControl />
          </div>
          <Marker
            latitude={37.5572}
            longitude={126.9369}>
            <span className="marker"></span>
          </Marker>
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