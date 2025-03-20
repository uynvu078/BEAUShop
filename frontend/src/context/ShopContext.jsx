import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;            
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [all_product, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : getDefaultCart();
    });

    useEffect(() => {
        fetch(`${API_BASE_URL}/allproducts`)
            .then((res) => res.json()).then((data) => setAllProduct(data))

        if (localStorage.getItem("auth-token")) {
            fetch(`${API_BASE_URL}/getcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem("auth-token")}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            })
            .then((resp) => resp.json())
            .then((data) => {
                setCartItems(data);
                localStorage.setItem("cart", JSON.stringify(data));
            });
        }
    }, [])

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
            return updatedCart;
        });

        if (localStorage.getItem("auth-token")) {
            fetch(`${API_BASE_URL}/addtocart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem("auth-token")}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId":itemId }),
            })
            .then((resp) => resp.json())
            .then((data) => console.log(data));
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
            return updatedCart;
        });

        if (localStorage.getItem("auth-token")) {
            fetch(`${API_BASE_URL}/removefromcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem("auth-token")}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId":itemId }),
            })
            .then((resp) => resp.json())
            .then((data) => console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
    };

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};

    return (
        <ShopContext.Provider value= {contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;