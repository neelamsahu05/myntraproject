import { Outlet } from "react-router-dom"
import Footer from "../componets/Footer"
import Header from "../componets/Header"
import FetchItems from "../componets/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../componets/LoadingSpinner"


function App() {
  const fetchStatus=  useSelector(store=>  store.fetchStatus)
   
    return (
    <>
      <Header/>
      
      <FetchItems/> 
      {fetchStatus.currentlyfetching?<LoadingSpinner/>:<Outlet/> }
      
      <Footer/>
         </>
  )
}

export default App
