import Products from "./Products";
import {products} from "./data"
export default function Shop(){
    return(
        <div className="bg-gray-300">
            <ul className="grid grid-cols-4 gap-5 p-10">
                {products.map(product=><Products key={product.id} id={product.id} image={product.image} name={product.name} price={product.price}></Products>)}
            </ul>
        </div>
    )
}