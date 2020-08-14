import React from 'react';
import './App.css';
import VideoPackage from './components/videoPackage'


function App() {
  //todo: add source loading buttons
  return (
    <div className="App">
      <header className="App-header">
        <div className="Player-container">
          <VideoPackage/>
        </div>
      </header>
    </div>
  );
}

export default App;
