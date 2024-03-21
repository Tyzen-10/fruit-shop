/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react"
import Cart from "./Cart"

const CartModal = forwardRef(function CartModal(_,ref){
    const dialog = useRef()
    useImperativeHandle(ref,()=>{
        return{
            open:()=>{
                dialog.current.showModal()
            },
            close:()=>{
                dialog.current.closeModal()
            }
            
        }
    })
    
    return(
        <dialog ref={dialog} className="backdrop:backdrop-blur-sm">
            <p className="text-4xl">Cart is open</p>
            <Cart></Cart>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default CartModal