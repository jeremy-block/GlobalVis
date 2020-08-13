import "../node_modules/video-react/dist/video-react.css"; // import css

import React from 'react';
import './App.css';
import ReactPlayer from 'react-player'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Player-container">
          <ReactPlayer 
          width='100%'
          height='100%'
          controls
          url='http://media.w3.org/2010/05/sintel/trailer.mp4' />
        </div>
      </header>
    </div>
  );
}

export default App;
