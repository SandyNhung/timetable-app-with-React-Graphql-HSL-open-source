import React from 'react';
import './App.css';
import InputNavigation from './components/InputNavigation';
import Routes from './components/Routes';
import MapComp from './components/Map';

function App() {
  return (
    <div className="uk-container-expand">
      <MapComp />
      <div className="route-search">
        <div className="input-form">
          <InputNavigation />
        </div>
        <div className="routes-display">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
