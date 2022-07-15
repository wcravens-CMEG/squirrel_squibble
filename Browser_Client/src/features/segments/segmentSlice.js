import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const segmentSlice = createSlice({
  name: 'segments',
  initialState,
  reducers: {
    segmentAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { segmentAdded } = segmentSlice.actions
export default segmentSlice.reducer
