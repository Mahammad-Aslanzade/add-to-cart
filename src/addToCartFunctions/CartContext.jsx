import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    
    const [cartProducts , setCartProducts] = useState([]);

    const [, forceRender] = useState(undefined);
 
    const handleUpdate = () => {
        forceRender((prev) => !prev);
    };


    useEffect(()=>{
        const dataInLocalStorage = JSON.parse(localStorage.getItem("cartStorage"));
        if(dataInLocalStorage){
            setCartProducts(dataInLocalStorage);
        }
    },[])


        
            const addCartItem = (item) =>{
                        
                var sendObject = {
                    
                    data: item,
                }
                // Əgər cart Bosdursa
                const checkProductQuantity = cartProducts.find((element)=> element.data.id === item.id);
                if(!checkProductQuantity){
                    sendObject.quantity = 1
                    cartProducts.push(sendObject);
                }
                // Əgər cartda element varsa
                else{
                    cartProducts.find((checkvalue)=> checkvalue.data.id === item.id).quantity +=1; 
                }
                localStorage.setItem("cartStorage", JSON.stringify(cartProducts));
                handleUpdate();

            }

            const deleteItem =(id)=>{
                const filtered = cartProducts.filter((item)=> item.data.id !== id);
                    setCartProducts(filtered)
                        localStorage.setItem("cartStorage",JSON.stringify(filtered));
                handleUpdate();
            }

            const getQuantity =  (id)=>{
        
            
            
                // Eger bosdursa
                if(!cartProducts){
                    return 0
                }
                // Eger Doludursa
                else{
            
                    const currentElement = cartProducts.find((element)=> element.data.id === id)
                    
                    if(!currentElement){
                        return 0
                    }else{
                        console.log(currentElement.quantity);
                        return currentElement.quantity
                    }
                }
                handleUpdate();
              }

            const updateQuantity= (id,quantity)=>{

            if(quantity < 0){
                console.log("You can't update quantity less than 0")
            }
            else{
        
            const incomeData = cartProducts;
        
            var cartArray = cartProducts;
        
            // Eger bosdursa
            if(!incomeData){
                console.log("Cart is empty");
            }
        
            // eger doludursa
            else{        
                const defineCurrentElement = cartProducts.find((element)=> element.data.id === id) 
                
                if(!defineCurrentElement){
                    console.log("This element is not exist in cart!")
                }
        
                else{
                    
                    defineCurrentElement.quantity = quantity;
                    localStorage.setItem("cartStorage", JSON.stringify(cartArray))
                }
                    
            }
            
            }
            handleUpdate();
            }

            const totalItemsQuantity=()=>{
                var count = 0;
                cartProducts.map((item)=>{
                    count+= item.quantity;
                })
                return count;
                handleUpdate();
            }

            const cartTotalPrice=()=>{
                var total =0;
                cartProducts.map((item)=>{
                    total+= item.quantity * item.data.price;
                })
                return total;
                handleUpdate();
            }



 

    return <CartContext.Provider value={{getQuantity,updateQuantity,addCartItem, cartProducts ,totalItemsQuantity ,cartTotalPrice,deleteItem}}>
        {props.children}
    </CartContext.Provider>
};