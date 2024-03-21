import Products from "./Products";
import {products} from "./data"
export default function Shop(){
    return(
        <div>
            <ul className="grid grid-cols-3 gap-4">
                {products.map(product=><Products key={product.id} id={product.id} image={product.image} name={product.name} price={product.price}></Products>)}
            </ul>
        </div>
    )
}