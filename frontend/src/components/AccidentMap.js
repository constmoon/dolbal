import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import style from './AccidentMap.css'


const RedPoint = () => <div className={style.redPoint} />


export default ({accidentList}) => {
    return (
        <ReactMapGL
            zoom={10}
            latitude={37.565}
            longitude={126.986}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxApiAccessToken="pk.eyJ1IjoiY29uc3Rtb29uIiwiYSI6ImNrMmhvd2NsbDA4NnkzaGsyZTF2MDRsOTAifQ.SDAsmLP_nNftRF3kdD-29w"
        >
            {accidentList.map((accident, i) => (
                <Marker
                    key={`marker-${i}`}
                    longitude={accident.longitude}
                    latitude={accident.latitude}
                >
                    <RedPoint />
                </Marker>
            ))}
        </ReactMapGL>
    )
}
