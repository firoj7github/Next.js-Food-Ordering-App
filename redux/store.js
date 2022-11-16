import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlics'
export default configureStore({
  reducer: {
    cart : cartReducer,
  },
})