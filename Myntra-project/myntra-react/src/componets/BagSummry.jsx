import { useSelector } from "react-redux"
const BagSummry=()=>{
   const bagItem= useSelector(store => store.bag)
   const item =useSelector(store => store.items);

 const finalItem= item.filter(item => {
  const elementfount= bagItem.indexOf(item.id)
  return elementfount >= 0
 })
    let  totalItem=bagItem.length
    const Convenience_Fee=99
     let totalMRP=0
    let totalDiscount=0
      
    finalItem.forEach(bagItem => {
      totalMRP+=bagItem.original_price;
      totalDiscount += bagItem.original_price - bagItem.current_price;
    });

     let finalPayment=  totalMRP-totalDiscount+Convenience_Fee

    return(

    <div className="bag-summary">
       <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
      
    
        </div>
)


}
export default BagSummry