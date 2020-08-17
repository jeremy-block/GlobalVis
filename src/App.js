import React, {useRef} from 'react';
import './App.css';
import VideoPackage from './components/videoPackage'


function App() {
  //must be set to null for first Parse of JS, overwritten by first render.
  const mainWindow = useRef(null); 
  //Define the function that is called by the buttons below.
  const changeSource = (src) => {
        console.log("changing video source to:", src, "The player has the following properties:", mainWindow.current)
        //Run the Change Src method on the main window.
        mainWindow.current.handleChangeSource(src)
  }
        
  
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="Player-container">
          <VideoPackage ref={mainWindow} source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
        </div>
        <div>
          <button onClick={() => {
            const src = 'http://media.w3.org/2010/05/sintel/trailer.mp4' 
            changeSource(src)
            }}>video 1</button>
         <button onClick={() => {
            const src = 'http://media.w3.org/2010/05/bunny/trailer.mp4' 
            changeSource(src)
            }}>video 2</button>
         <button onClick={() => {
            const src = 'http://media.w3.org/2010/05/bunny/movie.mp4' 
            changeSource(src)
            }}>video 3</button>
         <button onClick={() => {
            const src = 'http://media.w3.org/2010/05/video/movie_300.webm'
            changeSource(src)
            }}>video 4</button>
        </div>
      </header>
    </div>
  );
}

export default App;
