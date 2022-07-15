import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDocument } from './documentSlice'

export function Document() {
  const documents = useSelector( (state) => state.documents )
  const dispatch = useDispatch()
  return(
    <div className={'document'}>FooTastic!</div>

  )
}

export default Document
