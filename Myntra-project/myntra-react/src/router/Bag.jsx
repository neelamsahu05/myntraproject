import BagItem from "../componets/BagItem"
import BagSummry from "../componets/BagSummry"
import { useSelector } from "react-redux"
  
const Bag=()=>{
 const bagItem= useSelector(store=> store.bag);
 const item =useSelector(store => store.items);

 const finalItem= item.filter(item => {
  const elementfount= bagItem.indexOf(item.id)
  return elementfount >= 0
 })
  


return(
<>

    <main>
      <div className="bag-page">
      <div className="bag-item-container">
         {finalItem.map(item => <BagItem  key={item.id} item={item}/>)}
        
       </div>
        
       <BagSummry/>
      </div>
    </main>
    

</>


)

}
export default Bag