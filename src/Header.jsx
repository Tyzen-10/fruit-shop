import CartModal from "./CartModal"

/* eslint-disable react/prop-types */
const Header =({onOpenCart,cartRef})=>{
    return(
        <>
        <CartModal ref={cartRef}></CartModal>
        <div className="flex">
            <p className="text-4xl">Fruit Shop</p>
            <button type="button" onClick={onOpenCart} className="bg-red-500 p-2 rounded-md">Cart</button>
        </div>
        </>
    )
}
export default Header