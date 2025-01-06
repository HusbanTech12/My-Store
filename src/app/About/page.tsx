import Navbar1 from "../components/Navbar1";
import Image from "next/image";
const About = () => {

    return (
        <>

            <div className="w-[1440px] h-[4422px] bg-[#ffffff] ">
                <div className="w-[1440px] h-[729px] bg-[#FFFFFF] ">

                    <div><Navbar1 /></div>

                    {/* Row */}
                    <div className="w-[1440px] h-[612px] flex" >

                        {/* About Company */}
                        <div className="w-[599px] h-[321px] mt-32 ml-28">
                            <h5 className="w-[149px] h-6 font-bold text-[#252B42] ml-4 ">ABOUT COMPANY</h5>
                            <h1 className="w-[542px] h-[80px] font-bold text-[58px] text-[#252B42] leading-[80px] mt-16">ABOUT US</h1>
                            <h4 className="w-[376px] h-[60px] text-xl text-[#737373] font-normal mt-5">We know how large objects will act,
                                but things on a small scale</h4>

                            <button type="button" className="w-[195px] h-[52px] text-[#FFFFFF] text-sm font-bold bg-[#23A6F0] mt-8 rounded">Get Quote Now</button>
                        </div>

                        <Image
                            src={'/Vector/AboutPage-2-bg-shape-cover.png'}
                            alt="Loading"
                            width={632}
                            height={668}
                            className="mb-24"

                        />

                    </div>

                </div>


                {/* Content */}

                <div className='w-[1440px] h-[236px] ' >

                    {/* Row */}
                    <div className='w-[1018px] h-[188px] flex ml-48 gap-20 '>

                        {/* Paragraph-1 */}

                        <div className='w-[394px] h-[188px]'>
                            <div className="w-[364px] h-[140px] ">
                                <p className='w-[116px] h-[20] text-[#E74040] text-sm'>Problems trying</p>
                                 <h2 className="w-[364px] h-[96px] text-2xl text-[#252B42] font-bold">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h2>
                                
                            </div>
                        </div> 

                        {/* Paragraph-2 */}
                        <div className="w-[529px] h-[40px] mt-5">
                            <p className="w-[545px] h-[40px] text-[#737373] font-bold">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                            
                         </div>
                        
                    </div>

                </div>

          

                {/* Stats */}
                
                <div className="w-[1440] h-[264px] ">

                    {/* Container */}
                    <div className="w-[1050px] h-[264px]">

                        {/* Row */}
                        <div className="w-[1049px] h-[104px] flex ml-64">

                            {/* Customer -1 */}
                            <div className="w-[238px] h-[104px]">
                                <h1 className="w-[100xp] h-[80px] text-[#252B42] text-[58px] font-bold">15K</h1>
                               <h5 className="w-[146px] h-6 font-bold text-base text-[#737373]">Happy Customer</h5>
                            </div>

                            {/* Customer -2 */}
                            <div className="w-[238px] h-[104px]">
                                <h1 className="w-[100xp] h-[80px] text-[#252B42] text-[58px] font-bold">150K</h1>
                               <h5 className="w-[146px] h-6 font-bold text-base text-[#737373] ml-3">Monthly Visitors</h5>
                            </div>

                             {/* Customer -3 */}
                             <div className="w-[238px] h-[104px] ">
                                <h1 className="w-[100xp] h-[80px] text-[#252B42] text-[58px] font-bold ml-10">15</h1>
                               <h5 className="w-[177px] h-6 font-bold text-base text-[#737373] ">Countries Worldwide</h5>
                            </div>

                             {/* Customer -1 */}
                             <div className="w-[238px] h-[104px]">
                                <h1 className="w-[100xp] h-[80px] text-[#252B42] text-[58px] font-bold">100+</h1>
                               <h5 className="w-[146px] h-6 font-bold text-base text-[#737373] ml-5  ">Top Patners</h5>
                            </div>




                        </div>

                    </div>

                </div>
      


                {/* Video */}
                
                <div className="w-[1440px] h-[764px] ">

                    {/* Container */}
                    <div className="w-[1050px] h-[764px] ml-[195px]">

                        {/* Video Card */}
                        <div className="w-[989px] h-[540px]  rounded-[20px] bg-[url('/Vector/unsplash_T_Qe4QlMIvQ.png')]">
                            <Image
                            
                                src={'/Vector/VideoButton.png'}
                                alt="Loading"
                                width={92.6}
                                height={96.6}
                                className="ml-[450px] pt-[220px]"
                                
                                
                            />

                        </div>
                    </div>



                </div>

                
                {/* Our Team */}

                <div className="w-[1440px] h-[826px]">

                    {/* Container */}
                    <div className="w-[1050px] h-[819px] ml-[195px] ">

                        {/* Row */}
                        <div className="w-[607px] h-[100px] ml-64 bg-green-200">

                            <h2 className="w-[316px] h-[50px] font-bold text-[40px] text-[#252B42] ml-20 ">Meet Our Team</h2>
                            <p className="w-[469px] h-[40px] font-medium text-sm text-[#737373] text-center mt-3 "> Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

                        </div>

                        {/* Row-1 */}
                        <div className="w-[1034px] h-[383px] ">

                            {/* Card-1 */}
                            <div className="w-[316px] h-[383px]">
                                <Image
                                
                                src={'/Vector/team-user1.jpg'}
                                alt=""
                                width={316}
                                height={231}
                                    
                                />

                                {/* Card-Content */}
                                <div className="w-[316px] h-[152px] p-20">
                                    <h5 className="w-[83px] h-6 text-[#252B42] text-base font-bold" >UserName</h5>
                                    <h6 className="w-[77px] h-6 text-[#737373] font-bold">Profession</h6>

                                </div> 
                            </div>

                        </div>

                    </div>

                </div>

              
                {/*  */}


            </div>

        </>


    )
}

export default About;