import "../node_modules/video-react/dist/video-react.css"; // import css

import React from 'react';
import './App.css';
import Player from './components/player'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Player-container">
          <Player />
        </div>
      </header>
    </div>
  );
}

export default App;
