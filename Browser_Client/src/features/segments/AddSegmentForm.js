import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { segmentAdded } from './segmentSlice'

export const AddSegmentForm = () => {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle( e.target.value )
  const onContentChanged = e => setContent( e.target.value )

  const onSaveSegmentClicked = () => {
    if( title && content ) {
      dispatch(
        segmentAdded({
          id: nanoid(),
          title,
          content
        })
      )
    }
  }
  return (
    <section>
      <h2>Add a new Segment</h2>
      <form>
        <label htmlFor="segmentTitle">Segement Title:</label>
        <input
          type="text"
          id="segmentTitle"
          name="segmentTitle"
          value={title}
          onChange={onTitleChanged} />
        <textarea
          id="segmentContent"
          name="segmentContent"
          value={content}
          onChange={onContentChanged} />
      <button type="button" onClick={onSaveSegmentClicked}>Save Segment</button>
      </form>
    </section>
  )
}
