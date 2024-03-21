import {useContext} from 'react'
import { CartContext } from './store/CartContext'

const Cart = ()=>{
    const CartCtx = useContext(CartContext)
    const Total = CartCtx.items.reduce((accumulator,item)=>{
        accumulator += (item.price* item.quantity)
        return accumulator
    },0)
    return(
        <>
        <ul>
            {CartCtx.items.map(item=><li key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <button type='button' onClick={()=>CartCtx.onUpdateQuantity(item.id,1)}>+</button>
                <button type='button' onClick={()=>CartCtx.onUpdateQuantity(item.id,-1)}>-</button>
            </li>)}
        </ul>
        <p>Total:{Total}</p>
        </>
    )
}
export default Cart