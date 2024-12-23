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
               <div className="w-[1050px] h-[175px] flex items-center justify-around ml-32 gap-16 ">

                  {/* Image-1 */}
                  <div className="w-[160px] h-[34px]">
                     <Image src="/Vector/Clients-image1.png" alt="Loading" width={150} height={50} />
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

            {/* Footer */}
            <div className='w-[1440px] h-[142px]'>
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

            <hr className="w-[1057px] ml-[195px] border border-[#E6E6E6] " />


            <div className='w-[1440px] h-[272px]  bg-[#FFFFFF] pt-10'>

               {/* Container */}
               <div className='w-[1050px] h-[272px] mx-[195px] '>


                  {/* Row */}
                  <div className='w-[1041px] h-[170px] flex'>
                     {/* 1st */}
                     <div className='w-[148px] h-[170px]'>

                        <h4 className='font-bold text-black'>Company Info</h4>
                        <p className='text-[#737373] mt-3'>About Us</p>
                        <p className='text-[#737373] mt-3'>Carrier</p>
                        <p className='text-[#737373] mt-3'>We Are Hiring</p>
                        <p className='text-[#737373] mt-3'>Blog</p>


                     </div>

                     {/* 2nd */}
                     <div className='w-[148px] h-[170px]'>

                        <h4 className='font-bold text-black'>Legal</h4>
                        <p className='text-[#737373] mt-3'>About Us</p>
                        <p className='text-[#737373] mt-3'>Carrier</p>
                        <p className='text-[#737373] mt-3'>We Are Hiring</p>
                        <p className='text-[#737373] mt-3'>Blog</p>


                     </div>


                     {/* 3rd */}
                     <div className='w-[148px] h-[170px]'>

                        <h4 className='font-bold text-black'>Features</h4>
                        <p className='text-[#737373] mt-3'>About Us</p>
                        <p className='text-[#737373] mt-3'>Carrier</p>
                        <p className='text-[#737373] mt-3'>We Are Hiring</p>
                        <p className='text-[#737373] mt-3'>Blog</p>


                     </div>
                     {/* 4rt */}
                     <div className='w-[148px] h-[170px]'>

                        <h4 className='font-bold text-black'>Resources</h4>
                        <p className='text-[#737373] mt-3'>About Us</p>
                        <p className='text-[#737373] mt-3'>Carrier</p>
                        <p className='text-[#737373] mt-3'>We Are Hiring</p>
                        <p className='text-[#737373] mt-3'>Blog</p>


                     </div>
                     {/* 5th */}
                     <div className='w-[148px] h-[170px]'>

                        <h4 className='font-bold text-black'>Get In Touch</h4>

                        <div className='w-[321px] h-[58px] flex'>
                           <input type="text" placeholder='Enter Your Email' className='w-[321px] h-[58px] mt-3 text-black border border-[#23A6F0]' />
                           <button type='button' className='text-white bg-[#23A6F0] rounded-sm w-[117px] h-[58px] mt-3'>Subscribe</button>
                        </div>
                        <p className='text-[#737373] w-[175px] h-[28px] mt-5'>Lore imp sum dolor Amit</p>


                     </div>


                  </div>

               </div>


            </div>


            {/* Cards */}

            <div className="w-[1440px] h-[1778px] bg-[#FFFFFF]">

               {/* Container */}
               <div className="w-[1124px] h-[1778px] ml-[158px] py-12">

                  {/* Row-1 */}
                  <div className="w-[1048px] h-[488px] flex gap-8">

                     {/* 1st Image-Card */}
                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover1.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>

                     {/* 2nd Image-Card */}
                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover2.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>

                     {/* 3rd image-card */}

                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover3.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>

                     {/* 4rt image-card */}

                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover4.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>



                  </div>



                  {/* Row-2 */}
                  <div className="w-[1048px] h-[488px] flex gap-8 py-10">

                     {/* 1st Image-Card */}
                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover5.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>

                     {/* 2nd Image-Card */}
                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover6.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>

                     {/* 3rd image-card */}

                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover7.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>

                     {/* 4rt image-card */}

                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover8.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>



                  </div>


                  {/* Row-3 */}
                  <div className="w-[1048px] h-[488px] flex gap-8 pt-16">

                     {/* 1st Image-Card */}
                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover9.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>

                     {/* 2nd Image-Card */}
                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover10.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>

                     {/* 3rd image-card */}

                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover11.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
                        </div>

                     </div>

                     {/* 4rt image-card */}

                     <div className='w-[238px] h-[488px] bg-[#FFFFFF] '>

                        <div>

                           <Image
                              src={'/Vector/Shop-cover12.png'}
                              alt=""
                              width={239}
                              height={300}



                           />

                        </div>



                        <div className='w-[239px] h-[188px] ml-12 pt-5' >
                           <h5 className='text-[#252B42] ml-4'>Graphic Design</h5>
                           <p className='text-[#737373] mt-3'>English Department</p>
                           <p className='w-[108px] h-[34px] text-[#737373] ml-5 mt-3'>$16.48  <span className='text-[#252B42]'>$6.48</span></p>


                           {/* Product Colors */}
                           <div className='w-[82.23px] h-[16px] flex  gap-[6.80px] ml-6'>
                              <div className='w-4 h-4 bg-[#23A6F0] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#23856D] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#E77C40] rounded-[50px]'></div>
                              <div className='w-4 h-4 bg-[#252B42] rounded-[50px]'></div>


                           </div>
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