import { createSlice } from '@reduxjs/toolkit'
import {nanoid} from 'nanoid'

export const documentSlice = createSlice({
  name: 'documents',
  initialState: [],
  reducers: {
    addDocument: {
      reducer( state, action ) {
        state.push( action.payload )
      },
      prepare( header, content ) {
        return { payload: {
            _id: nanoid(),
            type: 'document',
            header: header,
            content: content,
            created_on: new Date().toISOString(),
            scion: []
        } }
      }
    }
  }
})
export const { addDocument } = documentSlice.actions;

export default documentSlice.reducer
