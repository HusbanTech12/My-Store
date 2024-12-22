import Navbar from "../components/Navbar"
import Image from 'next/image';

const Shop = () => {

   return (
      <>
         <div className="w-[1440px] h-[3038px] bg-[#FFFFFF]">

            <div><Navbar /></div>


            {/* Container */}
            <div className="w-[1440px] h-[92px] bg-[#FAFAFA]">

               {/* Row */}
               <div className="w-[1049px] h-[44px] flex ml-36  text-black gap-[800px] pt-8">
                  <h1 className="text-2xl font-bold">Shop</h1>

                  <div className="w-[119px] h-[44px] flex gap-8 font-bold">

                     <h1>Home</h1>
                     <h1>Shop</h1>
                  </div>

               </div>


            </div>

            {/* Shop Cards */}

            <div className="w-[1440px] h-[271px] bg-[#FAFAFA]">

               {/* Container */}

               <div className="w-[1088px] h-[271px] ">

                  {/* Row */}

                  <div className="w-[1088px] h-[223px] flex gap-5 ml-28 bg-[#FAFAFA]">

                     {/* Card-1 */}

                     <div className="w-[205px] h-[223px] bg-[url('/Vector/card-cover-5@2x.png')] bg-cover bg-[#FFFFFF]">

                        <div className="w-[65px] h-[40px] mt-24 ml-20">

                           <h6 className="w-[67px] h-6 font-bold text-base ">CLOTHS</h6>
                           <h6 className="w-[54px] h-[20px] text-sm font-normal ml-3">5 Items</h6>

                        </div>


                     </div>

                     {/* Card-2 */}

                     <div className="w-[205px] h-[223px] bg-[url('/Vector/card-cover-6.jpg')] bg-cover">

                        <div className="w-[65px] h-[40px] mt-24 ml-16">

                           <h6 className="w-[67px] h-6 font-bold text-base">CLOTHS</h6>
                           <h6 className="w-[54px] h-[20px] text-sm font-bold ml-3">5 Items</h6>

                        </div>

                     </div>

                     {/* Card-3 */}

                     <div className="w-[205px] h-[223px] bg-[url('/Vector/card-cover-7.jpg')] bg-cover">
                        <div className="w-[65px] h-[40px] mt-24 ml-20">

                           <h6 className="w-[67px] h-6 font-bold text-base">CLOTHS</h6>
                           <h6 className="w-[54px] h-[20px] text-sm font-bold ml-3">5 Items</h6>

                        </div>


                     </div>

                     {/* Card-4 */}

                     <div className="w-[205px] h-[223px] bg-[url('/Vector/card-cover-8.jpg')] bg-cover">
                        <div className="w-[65px] h-[40px] mt-24 ml-20">

                           <h6 className="w-[67px] h-6 font-bold text-base">CLOTHS</h6>
                           <h6 className="w-[54px] h-[20px] text-sm font-bold ml-3">5 Items</h6>

                        </div>


                     </div>

                     {/* Card-5 */}

                     <div className="w-[205px] h-[223px] bg-[url('/Vector/card-cover-9.jpg')] bg-cover">
                        <div className="w-[65px] h-[40px] mt-24 ml-20">

                           <h6 className="w-[67px] h-6 font-bold text-base">CLOTHS</h6>
                           <h6 className="w-[54px] h-[20px] text-sm font-bold ml-3">5 Items</h6>
                        </div>



                     </div>





                  </div>
               </div>



            </div>


            {/* Views Product And Filter */}

            <div className="w-[1440px] h-[98px] bg-[#FFFFFF]  ">

               {/* Container */}
               <div className="w-[1050px] h-[98px] ml-[140px] mt-5 flex items-center">

                  {/* Row */}
                  <div className="w-[1049px] h-[50px] flex gap-48 ">

                     {/* Sort */}
                     <div className="w-[178px] h-6">
                        <p className="text-[#737373] font-bold text-sm">Showing all 12 results </p>

                     </div>

                     {/* Sort-1 */}
                     <div className="w-[177px] h-[46px] flex gap-8">
                        <div className="text-black font-bold">
                           <p>Views:</p>
                        </div>

                        {/* Views Buttons */}
                        <div>
                           <Image
                              src={'/Vector/Btn-icon (1).png'}
                              alt="btn"
                              width={46}
                              height={46}


                           />
                        </div>
                        <div>
                           <Image
                              src={'/Vector/Btn-icon (2).png'}
                              alt="btn"
                              width={46}
                              height={46}


                           />
                        </div>

                     </div>

                     {/* Sort-2 */}

                     <div className="w-[252px] h-[50px] flex gap-3">
                        <button className="w-[141px] h-[50px] bg-[#F9F9F9] text-[#737373] border border-[#DDDDDD] rounded">Popularity</button>
                        <button className="w-[94px] h-[50px] bg-[#23A6F0] rounded">Filter</button>



                     </div>

                  </div>

               </div>


            </div>


            {/* Client images */}
            <div className="w-[1440px] h-[175px] bg-[#FAFAFA]">

               {/* Container */}
               <div className="w-[1050px] h-[175px] flex items-center justify-around ml-32 gap-12 ">

                  {/* Image-1 */}
                  <div className="w-[160px] h-[34px]">
                     <Image src="/Vector/Clients-image1.png" alt="Loading" />
                  </div>

                  {/* Image-2 */}
                  <div className="w-[103px] h-[34px]">
                     <Image src="/Vector/Clients-image2.png" alt="Loading" />
                  </div>

                  {/* Image-3 */}
                  <div className="w-[103px] h-[34px]">
                     <Image src="/Vector/Clients-image3.png" alt="Loading" />
                  </div>

                  {/* Image-4 */}
                  <div className="w-[103px] h-[34px]">
                     <Image src="/Vector/Clients-image4.png" alt="Loading" />
                  </div>

                  {/* Image-5 */}
                  <div className="w-[103px] h-[34px]">
                     <Image src="/Vector/Clients-image5.png" alt="Loading" />
                  </div>

                  {/* Image-6 */}
                  <div className="w-[103px] h-[34px]">
                     <Image src="/Vector/Clients-image6.png" alt="Loading" />
                  </div>

               </div>




            </div>

            {/* Footer */}
            <div className='w-[1440px] h-[488px]'>
               <div className='w-[1440px] h-[142px] bg-[#FFFFFF] '>

                  {/* Container */}
                  <div className='w-[1050px] h-[138px] mx-[195px] pt-16'>

                     {/* Row */}
                     <div className='w-[1049.5px] h-[58px] flex gap-[577.5px]'>
                        <div className='w-[236px] h-[58px] '>
                           <h1 className='font-bold text-black '>Bandage</h1>

                        </div>

                        <div className='w-[236px] h-6 flex gap-5'>

                           <Image
                              src={'/Vector/Facebook.png'}
                              alt='Facebook'
                              width={24}
                              height={24}



                           />

                           <Image
                              src={'/Vector/Instagram.png'}
                              alt='Facebook'
                              width={24}
                              height={24}



                           />

                           <Image
                              src={'/Vector/Twitter.png'}
                              alt='Facebook'
                              width={24}
                              height={24}



                           />



                        </div>




                     </div>

                  </div>
               </div>

            </div>





         </div>

      </>


   )

}

export default Shop