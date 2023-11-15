import { createContext, useEffect, useState } from "react";
import { products } from "../data/data";
export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(products)
    }, [])

    return <ProductContext.Provider value={[product, setProduct]}>
        {props.children}
    </ProductContext.Provider>
} 