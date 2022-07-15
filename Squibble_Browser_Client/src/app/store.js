import { configureStore } from "@reduxjs/toolkit";
import documentReducer from '../features/document/documentSlice'
export const store = configureStore({
  reducer: {
    documents: documentReducer
  }
})
