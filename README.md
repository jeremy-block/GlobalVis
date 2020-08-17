Live demo available at [global-vid.netlify.app](https://global-vid.netlify.app/) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/177b38c6-870d-4e09-89ae-f00a6d97ba54/deploy-status)](https://app.netlify.com/sites/global-vid/deploys)


> readme updated: 8/17

> *A simple responsive video player with simple controls below the player window.*

# Structure
The following is the hierarchy of the custom built components. - You will need all the custom files in your project's component's directory to use this responsive video player working.
- Video Package
  - React-Player (*installed via NPM)
  - Player-Controls
    - PlayToggleButton
    - SpeedToggleButton
    - PlayerProgressBar

In addition to the custom components, this project requires React-player to function. Install it with: 

`npm install react-player`

Then copy the custom components listed above into your own project's components folder.

To use this compnent in your own project, Add the Import statment to the parent component, and use the custom component in your code

` import VideoPackage from './components/videoPackage'; `

...

`<VideoPackage ref={mainWindow} source="starting_source" />`

You can access the Component by it's reference. For example:

`mainWindow.current.VideoPackageFunctionToCall`

To see this in action and in more detail open the `App.js` file.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will hot reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
