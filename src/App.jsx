import { useRef, useState } from 'react'
import './App.css'
import {products} from "./data"
import Header from './Header'
// import Products from './Products'
import Shop from './Shop'
import { CartContext } from './store/CartContext'
function App() {
  const [items,setItems] = useState([])
  //Function - When Item is added to cart.
  function onAddItemtoCart(id){
    const product = products.find(item=>item.id==id)
    console.log(product,"clicked")
    
    setItems((prevItems)=>{
      const updatedItems = [...prevItems]
      const existingItemIndex = items.findIndex(item=>item.id==id)
      const existingCartItem = updatedItems[existingItemIndex]
      
      if(existingCartItem){
        //if exists.
        const updatedItem = {
          ...existingCartItem,
          quantity : existingCartItem.quantity+1
        }
        updatedItems[existingItemIndex]=updatedItem
      }
      else{
        //does not exist.
        updatedItems.push(
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
          }
        )
      }
      console.log(updatedItems,"updatedItems printed.")
      return updatedItems
    })
    
    
  }
  
  //Function - When Cart Quantity is adjusted.
  function onUpdateItemQuantity(id,change){
    console.log(id,change,"update item quantity function working.")
  }
  const cartModal = useRef()
  const openCart = ()=>{
    cartModal.current.open()
  }
  const cartCtx = {
    items:items,
    onAddToCart:onAddItemtoCart,
    onUpdateQuantity:onUpdateItemQuantity,
  }
  return (
    <div>
      <CartContext.Provider value={cartCtx}>
      <Header onOpenCart={openCart} cartRef={cartModal}></Header>
      <Shop></Shop>
      </CartContext.Provider>
    </div>
  )
}

export default App
