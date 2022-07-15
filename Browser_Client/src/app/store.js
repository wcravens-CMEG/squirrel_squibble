import { configureStore} from "@reduxjs/toolkit";

import segmentReducer from '../features/segments/segmentSlice'

export default configureStore({
  reducer: {
    segments: segmentsReducer
  }
})
