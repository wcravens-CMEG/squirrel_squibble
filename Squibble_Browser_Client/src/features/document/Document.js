import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDocument } from '../../features/document/documentSlice'
import Segment from '../../components/Segment'
export function Document() {
  const document = useSelector( (state) => ( state.documents[0] && state.documents[state.documents.length - 1].document ) )
  const dispatch = useDispatch()
  const clickity = () => dispatch( addDocument('hello','world') )
  return ( <div className={'document'}>
            <div><button style={{float: 'right'}} onClick={ clickity } type={'button'} className={'btn btn-success'}>New Doc</button></div><Segment {...document}/></div> )

}
export default Document
