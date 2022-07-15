import React from 'react'
import { useSelector } from 'react-redux'

export const SegmentList = () => {
  const segments = useSelector(state => state.segments)

  const renderedSegments = segments.map( segment => (
    <article className="segment-excerpt" key={segment.id}>
      <h3>{segment.title}</h3>
      <p className="segment-content">{segment.content.substring(0, 100)}</p>
    </article>
  ))
  return (
    <section className="segments-list">
      <h2>Section</h2>
      {renderedSegments}
    </section>
  )
}
