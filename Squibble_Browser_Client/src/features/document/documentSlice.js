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
            created_on: new Date().toISOString(),
            document: {
                type: 'main',
                header: header,
                content: content,
                scion: []
              }
        } }
      }
    }
  }
})
export const { addDocument } = documentSlice.actions;

export default documentSlice.reducer
