
'use client'
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { Product } from '../../types/product';
import Image from 'next/image';
import { addToCart } from '../actions/action';
import Swal from 'sweetalert2';


const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    _id,
    title,
    price,
    dicountPercentage,
    "imageUrl": productImage.asset->url,
    slug
  }`;
  const products: Product[] = await client.fetch(query);
  // console.log(products);
  return products;
  

};


const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    
  e.preventDefault()
  Swal.fire({
    title: `${product.title} Added To Cart`,
    position: 'top-left',
    icon: 'success',
    timer: 2000,
    showConfirmButton : false
    

  })
  addToCart(product)
  
 
  // alert('working')

  console.log(handleAddToCart);

}


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts
        (productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <h1 className="text-center text-2xl font-semibold mt-10">Loading...</h1>;
  }

  if (!products || products.length === 0) {
    return <h1 className="text-center text-2xl font-semibold mt-10">No Products Found</h1>;
  }

  return (
    <div className="p-6 font-sans bg-white">
      <h1 className="text-4xl font-bold mb-6 text-black">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200" >
            
          
            <Link href={`/Product/${product.slug.current}`}>
              
            <Image
              src={product.imageUrl}
                alt={product.title}
                width={600}
                height={300}
             
              className="w-full h-48 object-cover rounded-md mb-4 hover:cursor-pointer"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
            {/* <p className=s"text-gray-600 text-sm mb-2">{product.description}</p> */}
            <p className="text-lg font-bold text-gray-700">Price: ${product.price}</p>
            <p className="text-lg font-bold text-gray-700">Discount:{product.dicountPercentage}</p>
             
             {/* <div>
              <button className='w-32 h-14 bg-blue-400  font-bold border rounded-lg mt-2'>View Details</button>
            </div> */}
               <button type="button" onClick={(e) => handleAddToCart(e ,product)} className="w-32 h-14 bg-gradient-to-r from-slate-600 to-emerald-500 text-white mt-3 font-bold rounded-md shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">Add Cart</button>    
             </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
