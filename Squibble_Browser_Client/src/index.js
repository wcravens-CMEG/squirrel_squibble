import React from 'react';
import './index.css'
import App from './App';
import {store} from 'app/store'
import{ Provider } from 'react-redux'

import { createRoot } from 'react-dom/client';
import PACKAGE from '../package.json';
import { appInit, subscribeToAppState, subscribeToInfo } from './Squibble_Application';
import VersionInfo from './components/VersionInfo';
//import './custom.scss';

const CONFIG = {
  name:           PACKAGE.Name,
  semver:         PACKAGE.version,
  "pre_release":  PACKAGE.pre_release,
  "build":        process.env.REACT_APP_BUILD_ID
}
const updateApp = ( topic, message ) => {
  console.log( message )
}

subscribeToAppState( updateApp )
//subscribeToAppState( console.log )
//subscribeToInfo( console.log )

appInit( CONFIG )

const container = document.getElementById( 'root' )
const root = createRoot( container )

root.render(
  <React.StrictMode><>
    <Provider store={store}>
      <App />
      <footer className={"VersionInfo"}>
        <VersionInfo config={{ type: 'ApplicationInfo', ...appConfig}} />
        <VersionInfo config={{ type: 'ClientInfo', ...CONFIG}} />
      </footer>

    </Provider>
  </></React.StrictMode>
)
