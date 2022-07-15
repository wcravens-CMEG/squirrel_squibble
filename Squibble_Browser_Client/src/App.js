import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Hotkeys from 'react-hot-keys'
import Document from './features/document/Document'
import { addDocument } from './features/document/documentSlice'

const keyMap = {
  left: ['h'],
  down: ['j'],
  up:  ['k'],
  right: ['l'],
  newDocument: ['shift+y']
}
const App = () => {
  const [ state, setState ] = useState('')
  const dispatch = useDispatch()
  const onKeyUp = (keyName, e, handle) => {
    console.log("test:onKeyUp", e, handle)
    setState({
      output: `onKeyUp ${keyName}`,
    });
  }
  const onKeyDown = (keyName, e, handle) => {
    console.log("test:onKeyDown", keyName, e, handle)
    setState({
      output: `onKeyDown ${keyName}`,
    });
    dispatch( addDocument('','') )
  }

  return (
    <>
      <Hotkeys
        keyName="shift+y"
        onKeyDown={onKeyDown}
      >
        <div style={{ padding: "50px" }}>
          {state.output}
        </div>
      </Hotkeys>
        <Document />
    </>
  );
}
export default App;
