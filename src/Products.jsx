/* eslint-disable react/prop-types */
import {useContext} from 'react'
import { CartContext } from './store/CartContext'
export default function Products({id,image,name,price}){
    const CartCtx = useContext(CartContext)
    return(
        <li className="col-span-1 p-5 bg-white border-2 border-orange-200 rounded-md">
            {/* Top-half-image */}
            <div className="rounded-md">
            <img className="h-56 object-cover w-full relative" src={image} alt="image" />
            </div>
            {/* Bottom half */}
            <div className="flex mt-2">
                {/* Left */}
                <div className="basis-1/2 px-2">
                    <p className="text-xl font-semibold">{name}</p>
                    <p className="text-xl font-mono"><span className='text-2xl font-semibold'>$</span>{price}</p>
                </div>
                {/* Right */}
                <div className="basis-1/2 flex justify-end items-center px-2">
                    <button onClick={()=>CartCtx.onAddToCart(id)} type="button" className="bg-green-400 text-white font-bold text-base px-5 py-2.5 rounded-sm">Add</button>
                </div>
            </div>
        </li>
    )
}