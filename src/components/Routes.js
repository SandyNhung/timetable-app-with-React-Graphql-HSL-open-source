import React from 'react';
import { useSelector } from 'react-redux';

function Routes() {
  const route = useSelector((state) => state.routes);
  console.log(route);
  const routeRender = (legs) => {
    console.log(legs);
    return legs.map((e, index) => (
      <div key={index}>
        {e.mode}
        Time: {e.startTime}
        End: {e.endTime}
        Distance: {e.distance}
      </div>
    ));
  };
  const itiRender = (iti) => {
    console.log(iti);
    return iti.map((e, index) => (
      <div key={index}>
        Legs {index + 1}: {routeRender(e.legs)}
      </div>
    ));
  };

  if (route.type === 'ROUTES') {
    return <div>{itiRender(route.route.plan.itineraries)}</div>;
  } else {
    return (
      <div>
        <p>{route.route.message}</p>
      </div>
    );
  }
}

export default Routes;

//itiRender(route.route.plan.itineraries)
