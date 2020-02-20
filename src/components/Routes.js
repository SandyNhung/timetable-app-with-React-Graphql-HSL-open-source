import React from 'react';
import { useSelector } from 'react-redux';
import './Routes.css';

function Routes() {
  const route = useSelector((state) => state.routes);
  console.log(route);
  const routeRender = (legs) => {
    console.log(legs);
    return legs.map((e, index) => (
      <li className="uk-width-1-2" key={index}>
        <span className="name">{e.to.name}</span>
        <span className="mode">BUS</span>
      </li>
    ));
  };
  const itiRender = (iti) => {
    console.log(iti);
    return iti.map((e, index) => (
      <div key={index}>
        <div>
          Route {index + 1}:
          <ul className="progressbar uk-flex">{routeRender(e.legs)}</ul>
        </div>
      </div>
    ));
  };

  return <div className="progress">{itiRender(res.data.plan.itineraries)}</div>;

  /*
  if (route.type === 'ROUTES') {
    return <div className="progress">{itiRender(route.route.plan.itineraries)}</div>;
  } else {
    return (
      <div>
        <p>{route.route.message}</p>
      </div>
    );
  }
  */
}

const res = {
  data: {
    plan: {
      itineraries: [
        {
          legs: [
            {
              mode: 'WALK',
              startTime: 1581496613000,
              endTime: 1581496698000,
              from: {
                lat: 60.168992,
                lon: 24.932366,
                name: 'Origin',
                stop: null
              },
              to: {
                lat: 60.168853,
                lon: 24.931183,
                name: 'Kamppi',
                stop: {
                  code: '0016',
                  name: 'Kamppi'
                }
              }
            },
            {
              mode: 'SUBWAY',
              startTime: 1581496698000,
              endTime: 1581497733000,
              from: {
                lat: 60.168853,
                lon: 24.931183,
                name: 'Kamppi',
                stop: {
                  code: '0016',
                  name: 'Kamppi'
                }
              },
              to: {
                lat: 60.159752,
                lon: 24.739516,
                name: 'Matinkylä',
                stop: {
                  code: 'E0012',
                  name: 'Matinkylä'
                }
              }
            },
            {
              mode: 'WALK',
              startTime: 1581497733000,
              endTime: 1581497927000,
              from: {
                lat: 60.159752,
                lon: 24.739516,
                name: 'Matinkylä',
                stop: {
                  code: 'E0012',
                  name: 'Matinkylä'
                }
              },
              to: {
                lat: 60.160197,
                lon: 24.738644,
                name: 'Matinkylä (M)',
                stop: {
                  code: 'E3153',
                  name: 'Matinkylä (M)'
                }
              }
            },
            {
              mode: 'BUS',
              startTime: 1581498480000,
              endTime: 1581498960000,
              from: {
                lat: 60.160197,
                lon: 24.738644,
                name: 'Matinkylä (M)',
                stop: {
                  code: 'E3153',
                  name: 'Matinkylä (M)'
                }
              },
              to: {
                lat: 60.17298,
                lon: 24.6873,
                name: 'Puolarmetsänkatu',
                stop: {
                  code: 'E4324',
                  name: 'Puolarmetsänkatu'
                }
              }
            },
            {
              mode: 'WALK',
              startTime: 1581498960000,
              endTime: 1581499358000,
              from: {
                lat: 60.17298,
                lon: 24.6873,
                name: 'Puolarmetsänkatu',
                stop: {
                  code: 'E4324',
                  name: 'Puolarmetsänkatu'
                }
              },
              to: {
                lat: 60.175294,
                lon: 24.684855,
                name: 'Destination',
                stop: null
              }
            }
          ]
        },
        {
          legs: [
            {
              mode: 'WALK',
              startTime: 1581497018000,
              endTime: 1581497103000,
              from: {
                lat: 60.168992,
                lon: 24.932366,
                name: 'Origin',
                stop: null
              },
              to: {
                lat: 60.168853,
                lon: 24.931183,
                name: 'Kamppi',
                stop: {
                  code: '0016',
                  name: 'Kamppi'
                }
              }
            },
            {
              mode: 'SUBWAY',
              startTime: 1581497103000,
              endTime: 1581498188000,
              from: {
                lat: 60.168853,
                lon: 24.931183,
                name: 'Kamppi',
                stop: {
                  code: '0016',
                  name: 'Kamppi'
                }
              },
              to: {
                lat: 60.159752,
                lon: 24.739516,
                name: 'Matinkylä',
                stop: {
                  code: 'E0012',
                  name: 'Matinkylä'
                }
              }
            },
            {
              mode: 'WALK',
              startTime: 1581498188000,
              endTime: 1581498368000,
              from: {
                lat: 60.159752,
                lon: 24.739516,
                name: 'Matinkylä',
                stop: {
                  code: 'E0012',
                  name: 'Matinkylä'
                }
              },
              to: {
                lat: 60.160249,
                lon: 24.738933,
                name: 'Matinkylä (M)',
                stop: {
                  code: 'E3148',
                  name: 'Matinkylä (M)'
                }
              }
            },
            {
              mode: 'BUS',
              startTime: 1581498540000,
              endTime: 1581499200000,
              from: {
                lat: 60.160249,
                lon: 24.738933,
                name: 'Matinkylä (M)',
                stop: {
                  code: 'E3148',
                  name: 'Matinkylä (M)'
                }
              },
              to: {
                lat: 60.17571,
                lon: 24.6874,
                name: 'Puolarmäki',
                stop: {
                  code: 'E4325',
                  name: 'Puolarmäki'
                }
              }
            },
            {
              mode: 'WALK',
              startTime: 1581499200000,
              endTime: 1581499457000,
              from: {
                lat: 60.17571,
                lon: 24.6874,
                name: 'Puolarmäki',
                stop: {
                  code: 'E4325',
                  name: 'Puolarmäki'
                }
              },
              to: {
                lat: 60.175294,
                lon: 24.684855,
                name: 'Destination',
                stop: null
              }
            }
          ]
        },
        {
          legs: [
            {
              mode: 'WALK',
              startTime: 1581497543000,
              endTime: 1581497628000,
              from: {
                lat: 60.168992,
                lon: 24.932366,
                name: 'Origin',
                stop: null
              },
              to: {
                lat: 60.168853,
                lon: 24.931183,
                name: 'Kamppi',
                stop: {
                  code: '0016',
                  name: 'Kamppi'
                }
              }
            },
            {
              mode: 'SUBWAY',
              startTime: 1581497628000,
              endTime: 1581498713000,
              from: {
                lat: 60.168853,
                lon: 24.931183,
                name: 'Kamppi',
                stop: {
                  code: '0016',
                  name: 'Kamppi'
                }
              },
              to: {
                lat: 60.159752,
                lon: 24.739516,
                name: 'Matinkylä',
                stop: {
                  code: 'E0012',
                  name: 'Matinkylä'
                }
              }
            },
            {
              mode: 'WALK',
              startTime: 1581498713000,
              endTime: 1581498907000,
              from: {
                lat: 60.159752,
                lon: 24.739516,
                name: 'Matinkylä',
                stop: {
                  code: 'E0012',
                  name: 'Matinkylä'
                }
              },
              to: {
                lat: 60.160197,
                lon: 24.738644,
                name: 'Matinkylä (M)',
                stop: {
                  code: 'E3153',
                  name: 'Matinkylä (M)'
                }
              }
            },
            {
              mode: 'BUS',
              startTime: 1581499380000,
              endTime: 1581499860000,
              from: {
                lat: 60.160197,
                lon: 24.738644,
                name: 'Matinkylä (M)',
                stop: {
                  code: 'E3153',
                  name: 'Matinkylä (M)'
                }
              },
              to: {
                lat: 60.17298,
                lon: 24.6873,
                name: 'Puolarmetsänkatu',
                stop: {
                  code: 'E4324',
                  name: 'Puolarmetsänkatu'
                }
              }
            },
            {
              mode: 'WALK',
              startTime: 1581499860000,
              endTime: 1581500258000,
              from: {
                lat: 60.17298,
                lon: 24.6873,
                name: 'Puolarmetsänkatu',
                stop: {
                  code: 'E4324',
                  name: 'Puolarmetsänkatu'
                }
              },
              to: {
                lat: 60.175294,
                lon: 24.684855,
                name: 'Destination',
                stop: null
              }
            }
          ]
        }
      ]
    }
  }
};

export default Routes;

//itiRender(route.route.plan.itineraries)
