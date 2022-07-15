import React from 'react';
import { useDispatch } from 'react-redux'
import Hotkeys from 'react-hot-keys'
import Document from './features/document/Document'
import { addDocument } from './features/document/documentSlice'

const App = () => {
  const dispatch = useDispatch()

  const onKeyDown = (keyName, e, handle) => {
    console.log("test:onKeyDown", keyName, e, handle)
    dispatch( addDocument('A nice little Header','... with a modest amount of content to go with it.') )
  }

  return (
    <>
      <Hotkeys
        keyName="shift+y"
        onKeyDown={onKeyDown}
      >
      <Document />
      </Hotkeys>
    </>
  );
}
export default App;
