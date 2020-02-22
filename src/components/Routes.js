import React from 'react';
import { connect } from 'react-redux';
import { getPolyline } from '../actions';
import '@fortawesome/fontawesome-free/css/all.css';
import Moment from 'react-moment';
import './Routes.css';

function Routes(prop) {
  const routeRender = (legs) => {
    return legs.map((e, index) => (
      <div className="uk-width-1-2" key={index}>
        <div className="mode">
          <i className={`fas fa-${modeIcon(e.mode)}`}></i>{' '}
          {e.mode === 'WALK' ? (
            <span className="duration">{Math.round(e.distance)}m</span>
          ) : null}
          <div className="line"></div>
        </div>
        <div className="name">
          <div>{e.from.name}</div>
          <span>
            <Moment format="HH:mm">{e.startTime}</Moment>
          </span>
        </div>
      </div>
    ));
  };
  const modeIcon = (mode) => {
    switch (mode) {
      case 'WALK':
        return 'walking';
      case 'BUS':
        return 'bus';
      case 'SUBWAY':
        return 'subway';
      case 'RAIL':
        return 'train';
      case 'FERRY':
        return 'ferry';
      case 'TRAM':
        return 'tram';
      default:
        return null;
    }
  };
  const itiRender = (iti) => {
    return iti.map((e, index) => (
      <div key={index} className="uk-margin-medium active">
        <div className="progressbar uk-flex" onClick={() => prop.getPolyline(e)}>
          {routeRender(e.legs)}
          <div className="uk-width-1-2" key={index}>
            <div className="mode">
              <i className={`fas fa-${modeIcon(e.mode)}`}></i>
              <div className="last-line">
                <i className="fas fa-caret-right fa-2x"></i>
              </div>
            </div>
            <div>Destination</div>
            <span>
              <Moment format="HH:mm">{e.legs[e.legs.length - 1].endTime}</Moment>
            </span>
          </div>
        </div>
      </div>
    ));
  };

  if (prop.routes.type === 'ROUTES') {
    //add the first route to polyline
    prop.getPolyline(prop.routes.route.plan.itineraries[0]);
    return (
      <div className="progress">{itiRender(prop.routes.route.plan.itineraries)}</div>
    );
  } else {
    return (
      <div>
        <p>{prop.routes.route.message}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  routes: state.routes
});

export default connect(mapStateToProps, { getPolyline })(Routes);
