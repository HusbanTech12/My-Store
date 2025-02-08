import { Product } from "../../types/product";

export const addToCart = (product: Product) => {
    
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingproductIndex = cart.findIndex(Item => Item._id === product._id)

    if (existingproductIndex > -1) {
        
        cart[existingproductIndex].inventry += 1
    }
    else {
        
        cart.push({ ...product , inventry : 1 })
    }
        
  localStorage.setItem('cart' , JSON.stringify(cart))

}


//  Remove Item From Cart

export const removeItems = (productId: string) => {
    
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(Item => Item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
};

// Update Cart Quantity
export const UpdateCartQuantity = (productId: string, quantity: number) => {

    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex(Item => Item._id === productId);


    if (productIndex > -1) {
        cart[productIndex].inventry = quantity
        
    };
};

export const getItem = (): Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
    

};

