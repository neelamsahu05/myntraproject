  import { useDispatch } from "react-redux"
import { bagAction } from "../store/BagSlice"
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
const HomeItems= ({item})=>{
     const dispatch= useDispatch()  
     const bagItem=useSelector(store => store.bag);
     const elementfound= bagItem.indexOf(item.id)>=0;
     
   const  handleAddToBag=()=>{
    dispatch(bagAction.addToBag(item.id))
      }
  
      const  handleremoveToBag=()=>{
        dispatch(bagAction.removeFromBag(item.id))
          }
    return(
        <>
          
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
           {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
        {elementfound? <button type="button" className="btn btn-add-bag btn-danger" onClick={handleremoveToBag}>  <MdDelete /> remove to bag</button>
                   :
      <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}>  <IoIosAddCircleOutline />add to Bag</button>
        }
       </div>
        </>
    )
}
export default HomeItems