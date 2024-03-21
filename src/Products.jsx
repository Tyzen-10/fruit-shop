/* eslint-disable react/prop-types */
import {useContext} from 'react'
import { CartContext } from './store/CartContext'
export default function Products({id,image,name,price}){
    const CartCtx = useContext(CartContext)
    return(
        <li className="col-span-1">
            {/* Top-half-image */}
            <div className="">
            <img className="h-56 object-cover w-full relative" src={image} alt="image" />
            </div>
            {/* Bottom half */}
            <div className="flex">
                {/* Left */}
                <div className="basis-1/2">
                    <p className="">{name}</p>
                    <p className="">${price}</p>
                </div>
                {/* Right */}
                <div className="basis-1/2">
                    <button onClick={()=>CartCtx.onAddToCart(id)} type="button" className="bg-green-500 text-white font-bold text-lg">Add</button>
                </div>
            </div>
        </li>
    )
}