import {configureStore, createSlice} from "@reduxjs/toolkit"
import itemSlice from "./ItemSlice"
import FetchStatusSlice from "./FetchStatusSlice"
import bagSlice from "./BagSlice"
const  myntrstore= configureStore({
  reducer:{
    items: itemSlice.reducer,
    fetchStatus:FetchStatusSlice.reducer,
    bag:bagSlice.reducer
  }
   
})
export default myntrstore