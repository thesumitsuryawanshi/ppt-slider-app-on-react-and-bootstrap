import React from 'react';
import TitleProfile from './components/TitleProfile';
import ImageCarousel from './components/ImageCarousel';
import InputBar from './components/InputBar';

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <TitleProfile />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ImageCarousel />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <InputBar />
        </div>
      </div>
    </div>
  );
}

export default App;
