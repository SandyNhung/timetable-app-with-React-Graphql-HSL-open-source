import React from 'react';
import './Map.css';
import { Map, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';

function MapComp(prop) {
  const polylineMap = (poly) => {
    return poly.map((e, index) => (
      <Polyline
        key={index}
        positions={[
          [e.from.lat, e.from.lon],
          [e.to.lat, e.to.lon]
        ]}
        color={'red'}
      />
    ));
  };

  const marker = (position) => {
    return (
      <Marker position={position.coordinates}>
        <Popup>{position.name}</Popup>
      </Marker>
    );
  };
  const position = prop.polyline
    ? [prop.polyline[0].from.lat, prop.polyline[0].from.lon]
    : prop.coordinates.coordinates;
  return (
    <div className="map-box">
      <div id="map">
        <Map center={position} zoom={14}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {prop.coordinates.name === 'Helsinki rautatieasema'
            ? null
            : marker(prop.coordinates)}

          {prop.polyline ? polylineMap(prop.polyline) : null}
        </Map>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  coordinates: state.coordinates,
  polyline: state.routesPolyline
});

export default connect(mapStateToProps)(MapComp);
