import CartModal from "./CartModal"

/* eslint-disable react/prop-types */
const Header =({onOpenCart,cartRef})=>{
    return(
        <>
        <CartModal ref={cartRef}></CartModal>
        <div className="flex justify-between bg-orange-400 text-white py-3 px-14">
            <p className="text-4xl">Fruit Shop</p>
            <button type="button" onClick={onOpenCart} className="bg-red-500 py-2.5 rounded-sm font-bold text-base px-5">Cart</button>
        </div>
        </>
    )
}
export default Header