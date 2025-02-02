
import Image from 'next/image'
export default function ClientImage () {
  return (
    <div>

           
                       {/* Client images */}
                       <div className="w-[1054px] h-[175px] bg-[#FAFAFA]">
           
                          {/* Container */}
                          <div className="w-[1050px] h-[175px] flex items-center justify-around   ">
           
                             {/* Image-1 */}
                             <div className="w-[153px] h-[34px]">
                                <Image src="/Vector/Clients-image1.png" alt="Loading" width={153} height={50} />
                             </div>
           
                             {/* Image-2 */}
                             <div className="w-[103px] h-[34px]">
                                <Image src="/Vector/Clients-image2.png" alt="Loading" width={150} height={50} />
                             </div>
           
                             {/* Image-3 */}
                             <div className="w-[103px] h-[34px]">
                                <Image src="/Vector/Clients-image3.png" alt="Loading" width={150} height={50} />
                             </div>
           
                             {/* Image-4 */}
                             <div className="w-[103px] h-[34px]">
                                <Image src="/Vector/Clients-image4.png" alt="Loading" width={150} height={50} />
                             </div>
           
                             {/* Image-5 */}
                             <div className="w-[103px] h-[34px]">
                                <Image src="/Vector/Clients-image5.png" alt="Loading" width={150} height={50} />
                             </div>
           
                             {/* Image-6 */}
                             <div className="w-[103px] h-[60px]">
                                <Image src="/Vector/Clients-image6.png" alt="Loading" width={150} height={50} />
                             </div>
           
                          </div>
           
           
           
           
                       </div>



    </div>
  )
}
