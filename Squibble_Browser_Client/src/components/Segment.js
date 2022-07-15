import React from 'react'
import List from './List'
import './Segment.css'

const Segment = ( props ) => {
  const nestedSegments = ( props.scion || [] ).map( seg => { return ( <Segment {...seg} /> ) } )
  const SegmentType = props.type || 'div';
  if ( SegmentType === 'List' ) {
    return <List {...props}/>
  }
  return (
    <SegmentType>
        <header>{ props.header }</header>
        <p>{ props.content }</p>
        { nestedSegments }
    </SegmentType>
  )
}
export default Segment
