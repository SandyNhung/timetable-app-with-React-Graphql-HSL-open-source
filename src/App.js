import React from 'react';
import './App.css';
import InputNavigation from './components/InputNavigation';
import Routes from './components/Routes';

function App() {
  return (
    <div className="uk-container">
      <h1>Navigation</h1>
      <InputNavigation />
      <Routes />
    </div>
  );
}

export default App;
