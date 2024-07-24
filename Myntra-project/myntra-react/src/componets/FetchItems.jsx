import { Fa500Px } from "react-icons/fa"
import { useDispatch } from "react-redux"
 import { useSelector } from "react-redux"
 import { useEffect } from "react"
import { itemAction } from "../store/ItemSlice"
import {FatchStatusAction} from "../store/FetchStatusSlice"
const FetchItems= ()=>{
    const fetchStatus=  useSelector(store=>  store.fetchStatus)
        const  dispatch= useDispatch();
         
        useEffect (()=>{
        if(fetchStatus.fetchDone) return;

        const Controller= new AbortController();
        const signal= Controller.signal;
        dispatch(FatchStatusAction.markFatchingStarted());
       fetch('http://localhost:8080/items',(signal))
       .then(res => res.json())
       .then(({items}) =>{ 

         dispatch(FatchStatusAction.markDone());
         dispatch(FatchStatusAction.markFatchingFinished())
        dispatch(itemAction.addInitialItem(items))
         
    },)

        return ()=>{
           //console.log("clenaed api")
           Controller.abort();
        }
    }, [fetchStatus])




    return (
    <>
     </>


)

    
}
export default FetchItems