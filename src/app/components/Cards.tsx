import Image from 'next/image';
export default function Cards() {

    return (

        <>
            {/* cards */}
            <div className="w-[1440px] h-[770px] bg-[#FAFAFA]">

                {/* container */}
                <div className="w-[1050px] h-[770px] mx-[195px] ">

                    {/* 1st Row */}
                    <div className="w-[607px] h-[62px] mx-[450px] pt-10 text-black">
                        <h1 className="w-[181px] h-[32px] text-2xl font-bold ml-14 ">EDITOS PICKS</h1>
                        <p className="w-[347px] h-[20px] font-medium text-sm">Problems trying to resolve the conflict between </p>
                    </div>

                    {/* 2nd Row */}
                    <div className="w-[1050px] h-[500px] mt-16 border border-green-300 flex gap-8">
                        <div className='w-[510px] h-[500px] bg-[url("/Vector/Card1.png")] bg-cover'>
                            <button type='button' className='w-[170px] h-[48px] bg-[#FFFFFF] text-[#252B42] mt-[435px] ml-5' >MEN</button>

                        </div>

                        <div className='w-[240px] h-[500px] bg-[url("/Vector/Card2.png")]'>
                            <button type='button' className='w-[170px] h-[48px] bg-[#FFFFFF] text-[#252B42] mt-[435px] ml-5'>WOMEN</button>
                        </div>

                        <div className='w-[240px] h-[500px] bg-[url("/Vector/Card3.png")]'>

                            <button type='button' className='w-[170px] h-[48px] bg-[#FFFFFF] text-[#252B42] mt-[170px]'>ACCESSIRIES</button>
                            <button type='button' className='w-[170px] h-[48px] bg-[#FFFFFF] text-[#252B42] mt-[215px] ml-4'>KIDS</button>
                        </div>




                    </div>


                </div>
            </div>


            {/* 2nd Cards */}
            <div className='w-[1440px] h-[1652px] bg-[#FFFFFF]'>

                {/* Contianer */}
                <div className='w-[1050px] h-[1652px]  mx-[195px] '>

                    {/* 1st Row */}
                    <div className="w-[691px] h-[102px] mx-[450px] pt-10 text-black">
                        <h2 className="w-[191px] h-[32px] text-xl font-bold ml-14 text-[#737373] ">Featured Products</h2>
                        <h3 className='w-[330px] h-[32px] font-bold text-2xl leading-8'>BESTSELLER PRODUCTS</h3>
                        <p className="w-[347px] h-[20px] font-medium text-sm leading-5"> Problems trying to resolve the conflict between </p>
                    </div>

                    {/* 2nd Row */}
                    <div className='w-[1049px] h-[615px] mt-16 flex gap-8'>

                        {/* 1st Image-Card */}
                        <div className='w-[238px] h-[615px] bg-[#FFFFFF] '>

                            <div className='w-[239px] h-[427px] bg-[url("/Vector/Card4.png")]'>

                            </div>



                            <div className='w-[239px] h-[188px] ml-12 mt-5' >
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

                        <div className='w-[238px] h-[615px] bg-[#FFFFFF] '>

                            <div className='w-[239px] h-[427px] bg-[url("/Vector/Card5.png")] bg-cover'>

                            </div>



                            <div className='w-[239px] h-[188px] ml-12 mt-5' >
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

                        {/* 3rd Image-Card */}

                        <div className='w-[238px] h-[615px] bg-[#FFFFFF] '>

                            <div className='w-[239px] h-[427px] bg-[url("/Vector/Card6.png")]'>

                            </div>



                            <div className='w-[239px] h-[188px] ml-12 mt-5' >
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

                        {/* 4rt Image-Card  */}
                        <div className='w-[238px] h-[615px] bg-[#FFFFFF] '>

                            <div className='w-[239px] h-[427px] bg-[url("/Vector/Card7.png")]'>

                            </div>



                            <div className='w-[239px] h-[188px] ml-12 mt-5' >
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


                    {/* 3rd Row */}
                    <div className='w-[1049px] h-[615px] mt-16 flex gap-8'>

                        {/* 1st Image-Card */}
                        <div className='w-[238px] h-[615px] bg-[#FFFFFF] '>

                            <div className='w-[239px] h-[427px] bg-[url("/Vector/Card8.png")]'>

                            </div>



                            <div className='w-[239px] h-[188px] ml-12 mt-5' >
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

                        <div className='w-[238px] h-[615px] bg-[#FFFFFF] '>

                            <div className='w-[239px] h-[427px] bg-[url("/Vector/Card9.png")] bg-cover'>

                            </div>



                            <div className='w-[239px] h-[188px] ml-12 mt-5' >
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

                        {/* 3rd Image-Card */}

                        <div className='w-[238px] h-[615px] bg-[#FFFFFF] '>

                            <div className='w-[239px] h-[427px] bg-[url("/Vector/Card10.png")]'>

                            </div>



                            <div className='w-[239px] h-[188px] ml-12 mt-5' >
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

                        {/* 4rt Image-Card  */}
                        <div className='w-[238px] h-[615px] bg-[#FFFFFF] '>

                            <div className='w-[239px] h-[427px] bg-[url("/Vector/Card11.png")]'>

                            </div>



                            <div className='w-[239px] h-[188px] ml-12 mt-5' >
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
            <div className='w-[1439px] h-[709px] bg-[#23856D]'>
                <div className='w-[1044] h-[651px] pt-[48px] pl-[197.5px]'>
                    <div className='w-[1044px] h-[615px] my-[48px] flex'>

                        <div className='w-[599px] h-[331px] mt-10'>
                            <h5 className='w-[122px] h-6 leading-6'>summer 2024</h5><br />

                            <h1 className='w-[548px] h-[80px] font-bold text-[58px] leading-[80px] '>Vita Classic Product</h1>
                            <h4 className='w-[376px] h-[60px] font-medium text-[20px]  mt-24'>We know how large objects will act, but things on a small scale.</h4>

                            <button type='button' className='w-[221px] h-[62px] bg-[#2DC071] rounded-[5px] font-medium mt-12'>ADD TO CHART</button>
                        </div>


                        <Image

                            src={'/Vector/shop-hero1.png'}
                            alt='Image'
                            width={443}
                            height={685}

                        />



                    </div>

                </div>
            </div>

            {/* Main Image-3 */}
            <div className='w-[1439px] h-[709px] bg-[#FFFFFF]'>
                <div className='w-[1044] h-[651px] pt-[48px] pl-[197.5px]'>
                    <div className='w-[1044px] h-[615px] my-[48px] flex'>

                        <Image

                            src={'/Vector/shop-hero2.png'}
                            alt='Image'
                            width={704}
                            height={685}

                        />





                        <div className='w-[599px] h-[331px] mt-10 ml-32'>
                            <h5 className='w-[122px] h-6 leading-6 text-[#BDBDBD]'>summer 2024</h5><br />

                            <h1 className='w-[548px] h-[80px] font-bold text-[58px] leading-[80px] text-[#252B42] '>Part of the Neural
                                Universe</h1>
                            <h4 className='w-[376px] h-[60px] font-medium text-[20px]  mt-24 text-[#737373]'>We know how large objects will act, but things on a small scale.</h4>

                            <div className='flex gap-7'>

                                <button type='button' className='w-[221px] h-[62px] bg-[#2DC071] rounded-[5px] font-medium mt-12'>BUY NOW</button>
                                <button type='button' className='w-[221px] h-[62px] text-[#2DC071] rounded-[5px] border border-[#2DC071] font-medium mt-12'>READ MORE</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* 3rd Cards */}
            <div className='w-[1440px] h-[1044px] bg-[#FFFFFF]'>

                {/* Container */}
                <div className='w-[1050px] h-[1044px] mx-[195px] '>

                    {/* 1st Row */}
                    <div className="w-[691px] h-[102px] mx-[450px] pt-32 text-black ">
                        <h2 className="w-[191px] h-[32px] text-xl font-bold ml-14 text-[#737373] ">Featured Products</h2>
                        <h3 className='w-[330px] h-[32px] font-bold text-2xl leading-8'>BESTSELLER PRODUCTS</h3>
                        <p className="w-[347px] h-[20px] font-medium text-sm leading-5"> Problems trying to resolve the conflict between </p>
                    </div>

                    {/* 2nd Row */}

                    <div className='w-[1045px] h-[606px] flex gap-3 mt-60'>
                        <div className='w-[328px] h-[606px] '>

                            <div className='w-[348px] h-[300px] '>
                                <Image

                                    src={'/Vector/Card12.png'}
                                    alt='abc'
                                    width={328}
                                    height={606}


                                />


                            </div>

                            <div className='w-[348px] h-[606px] '>

                                <div className='w-[159px] h-[16px] flex gap-3'>
                                    <p className='text-[#8EC2F2]'>Google</p>
                                    <p className='text-[#737373]'>Treading</p>
                                    <p className='text-[#737373]'>New</p>

                                </div>

                                <div>
                                    <h4 className='w-[247px] h-[60px] text-xl mt-4 font-bold text-[#252B42]'>Loudest à la Madison #1
                                        Lintegral</h4>

                                    <p className='w-[280px] h-[60px] text-[14px] font-medium mt-3 text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. Its only a
                                        keystroke away.</p>
                                </div>

                                <div className='w-[104px] h-6'>
                                    <h6 className='font-semibold '>Learn More</h6>

                                </div>


                            </div>



                        </div>


                        {/* 2nd Image-Card */}
                        <div className='w-[328px] h-[606px] '>

                            <div className='w-[348px] h-[300px] '>
                                <Image

                                    src={'/Vector/Card12.png'}
                                    alt='abc'
                                    width={328}
                                    height={606}


                                />


                            </div>

                            <div className='w-[348px] h-[606px] '>

                                <div className='w-[159px] h-[16px] flex gap-3'>
                                    <p className='text-[#8EC2F2]'>Google</p>
                                    <p className='text-[#737373]'>Treading</p>
                                    <p className='text-[#737373]'>New</p>

                                </div>

                                <div>
                                    <h4 className='w-[247px] h-[60px] text-xl mt-4 font-bold text-[#252B42]'>Loudest à la Madison #1
                                        Lintegral</h4>

                                    <p className='w-[280px] h-[60px] text-[14px] font-medium mt-3 text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. Its only a
                                        keystroke away.</p>
                                </div>

                                <div className='w-[104px] h-6'>
                                    <h6 className='font-semibold text-white bg-blue-400'>Learn More</h6>

                                </div>


                            </div>



                        </div>


                        {/* 3rd Image-Card */}

                        <div className='w-[328px] h-[606px] '>

                            <div className='w-[348px] h-[300px] '>
                                <Image

                                    src={'/Vector/Card12.png'}
                                    alt='abc'
                                    width={328}
                                    height={606}


                                />


                            </div>

                            <div className='w-[348px] h-[606px] '>

                                <div className='w-[159px] h-[16px] flex gap-3'>
                                    <p className='text-[#8EC2F2]'>Google</p>
                                    <p className='text-[#737373]'>Treading</p>
                                    <p className='text-[#737373]'>New</p>
                                </div>

                                <div>
                                    <h4 className='w-[247px] h-[60px] text-xl mt-4 font-bold text-[#252B42]'>Loudest à la Madison #1
                                        Lintegral</h4>

                                    <p className='w-[280px] h-[60px] text-[14px] font-medium mt-3 text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. Its only a
                                        keystroke away.</p>
                                </div>

                                <div className='w-[104px] h-6'>
                                    <h6 className='font-semibold '>Learn More</h6>

                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            </div>



            {/* Footer */}
            <div className='w-[1440px] h-[488px]'>
                <div className='w-[1440px] h-[142px] bg-[#FAFAFA] '>

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





                {/* Footer-End */}

                <div className='w-[1440px] h-[272px]  bg-[#FFFFFF]'>

                    {/* Container */}
                    <div className='w-[1050px] h-[272px] mx-[195px] pt-16'>


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
                                    <input type="text" placeholder='Enter Your Email' className='w-[321px] h-[58px] mt-3 border border-[#23A6F0]' />
                                    <button type='button' className='text-white bg-[#23A6F0] rounded-sm w-[117px] h-[58px] mt-3'>Subscribe</button>
                                </div>
                                <p className='text-[#737373] w-[175px] h-[28px] mt-5'>Lore imp sum dolor Amit</p>


                            </div>
                            




                        </div>

                    </div>


                </div>


            </div>

        </>


    )
}