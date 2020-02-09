import React, { Component } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import { MAPBOX } from '../settings';

// TODO: class component로 선커밋 후 functional component로 변경
class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 37.565,
      longitude: 126.92,
      zoom: 11,
    },
    showPopup: false,
    selectedPopup: null,
  };

  _setPopup = (accident) => {
    this.setState({ 
      showPopup: true,
      selectedPopup: accident
    });
  }

  _renderPopup = () => {
    const { showPopup, selectedPopup } = this.state;
    return (
      showPopup && (
        <Popup
          tipSize={10}
          anchor="bottom"
          longitude={selectedPopup.longitude}
          latitude={selectedPopup.latitude}
          onClose={() => this.setState({ showPopup: false })}
        >
          <p style={{ maxWidth: '16rem', fontSize: '0.95rem' }}>{selectedPopup.description}</p>
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;
    const { accidentList } = this.props;
    const isAccidentEmpty = accidentList.find(item => item['isEmpty'] === true);

    return (
      <div className="map-container">
        <ReactMapGL
          {...viewport}
          mapStyle={MAPBOX.STYLE_URL}
          mapboxApiAccessToken={MAPBOX.ACCESS_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
          className="map">
          <div style={{ position: 'absolute', right: 0, padding: '10px' }}>
            <NavigationControl />
          </div>
          {isAccidentEmpty ?
            null
            :
            accidentList.map((accident, index) => (
              <Marker
                key={`marker-${index}`}
                longitude={accident.longitude}
                latitude={accident.latitude}
              >
                <div
                  className="marker"
                  onClick={() => {
                    this._setPopup(accident);
                  }} />
              </Marker>
            ))}
            {this._renderPopup()}
        </ReactMapGL>
        <style jsx>{`
          .map-container {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
          }
          .map {
            position: relative;
          }
          .marker {
            display: inline-block;
            width: 0.9rem;
            height: 0.9rem;
            border: 1px solid #000;
            border-radius: 50%;
            background-color: #f00;
            cursor: pointer;
          }
      `}</style>
      </div >
    );
  }
}

export default Map;