'use client'
import React from 'react'
import { useState , useEffect} from 'react'
import { Product } from '@/types/product'
import { getItem } from '../actions/action'
// import Swal from 'sweetalert2'
const CartPage = () => {

  const [cartItems, setCartItems] = useState<Product[]>([])
      
    useEffect(() => {
       
        setCartItems(getItem())
    }, [])
    console.log(CartPage);
    
  
    // const removeItem = () => {
    //     Swal.fire({
    //         title: 'Are You Sure?',
    //         text: 'You Will not  be able recover this item!',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText :  'Yes , Remove it !'   
            
           


    //     })

    // }




  return (
    <div>

          
          <div>
              {cartItems.map((Item) => (
                <div key={Item._id}>{Item.title}</div>
              
                
            ))}

          </div>

    </div>
  )
}

export default CartPage;