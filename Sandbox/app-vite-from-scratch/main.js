import javascriptLogo from './javascript.svg'
import bootstrap   from 'bootstrap/dist/js/bootstrap'
import {
  insertStyleElementWithTheme,
  listAvailableThemes,
  removeAllStyleElementsFromHead,
  switchTheme
} from "./StyleThemes.js";

insertStyleElementWithTheme( 'Bootstrap' )
//switchTheme( 'Sketchy'  )

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

