
import { createSlice } from "@reduxjs/toolkit";


const FatchStatusSlice= createSlice({
    name:'fetchStatus',
    initialState: {
        fetchDone:false,  // false: pending true:done
        currentlyfetching:false
    },
    reducers:{
        markDone:(state)=>{
         state.fetchDone=true;
        },
        markFatchingStarted:(state)=>{
       state.currentlyfetching=true;
        },
        markFatchingFinished:(state)=>{
        state.currentlyfetching=false;

        }

    
      }
   
    })
    export const FatchStatusAction= FatchStatusSlice.actions;
    export default FatchStatusSlice