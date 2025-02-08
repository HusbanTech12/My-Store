

import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/product"
import { groq } from "next-sanity";
import Image from "next/image";
// import { addToCart } from "@/app/actions/action";

interface PropsType{
    params : Promise <{slug : string}>
}


// const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    
//     e.preventDefault()
//     addToCart(product)

//     alert('working')
    
// }
const getProduct =  async (slug: string): Promise<Product> => {
   
    return client.fetch(

        groq `*[_type == "product" && slug.current == $slug][0]{
            _id,
            _type,
            title,
            price,
            description,
            slug,
            dicountPercentage,
            isNew,
            inventry,
            tags,
            "imageUrl": productImage.asset->url,
            }`, { slug }
            
            
        )}

const ProductPage = async ({ params }: PropsType) => {
    const { slug } = await params
    const product = await getProduct(slug)
    console.log(product);
         
    return (
       <>
       
            <div className="w-full h-[3038px] bg-slate-300">
                <div className="flex gap-10 pt-24 pl-44">

                <div>

                    <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={300}
                        height={600}
                      className=" w-[400px] h-[400px] object-cover rounded-xl mt-8 hover:cursor-pointer"
                    />        
                </div>
                
                
                    <div className="w-[1100px] h-[600px]">
               
                        <h1 className="text-4xl text-black font-bold mb-5"> {product.title}</h1>
                        <p className="w-[800px] h-[370px] text-black font-bold">{product.description }</p>
                       
                        {/* <div>
                            <button type="button" onClick={(e) => handleAddToCart(e ,product)} className="w-32 h-14 bg-gradient-to-r from-slate-600 to-emerald-500 text-white font-bold rounded-md shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">Add Cart</button>
                        </div> */}
                                      
                    </div>
                    
           
                </div>
            </div>
       </> 
       
    )

 }

 export default ProductPage;