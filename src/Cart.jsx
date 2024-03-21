import {useContext} from 'react'
import { CartContext } from './store/CartContext'

const Cart = ()=>{
    const CartCtx = useContext(CartContext)
    return(
        <ul>
            {CartCtx.items.map(item=><li key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
            </li>)}
        </ul>
    )
}
export default Cart