import ClientImage from "../components/ClientImage";
import Navbar1 from "../components/Navbar1";
import Image from "next/image";
import Footer from "../components/Footer";
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
                        <div className="w-[607px] h-[100px] ml-64">

                            <h2 className="w-[316px] h-[50px] font-bold text-[40px] text-[#252B42] ml-20 ">Meet Our Team</h2>
                            <p className="w-[469px] h-[40px] font-medium text-sm text-[#737373] text-center mt-3 "> Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

                        </div>

                        {/* Row-2 */}
                        <div className="w-[1034px] h-[383px] mt-36 flex gap-5">

                            {/* Card-1 */}
                            <div className="w-[316px] h-[383px]">
                                <Image
                                
                                src={'/Vector/team-user1.jpg'}
                                alt=""
                                width={316}
                                height={231}
                                    
                                />

                                {/* Card-Content */}
                                <div className="w-[316px] h-[152px] ml-24 mt-8">
                                    <h5 className="w-[83px] h-6 text-[#252B42] text-base font-bold mb-4 ml-7" >UserName</h5>
                                    <h6 className="w-[77px] h-6 text-[#737373] font-bold mb-4 ml-7">Profession</h6>


                                {/* Social Icons */}
                                   
                                    <div className="w-[112px] h-6 flex gap-8 ">
                                        
                                     {/* Facebook-Icon */}
                                    <Image
                                        src={ '/Vector/Facebook-Icon.png'}
                                        alt="Loading"
                                        width={24}
                                        height={24}
                                        
                                        />

                                       {/* Instagram-Icon */}
                                      <Image
                                        src={ '/Vector/Instagram-Icon.png'}
                                        alt="Loading"
                                        width={24}
                                        height={24}
                                        
                                        />

                                         {/* Twitter-Icon */}
                                        <Image
                                        src={ '/Vector/Twitter-Icon.png'}
                                        alt="Loading"
                                        width={24}
                                        height={24}
                                        
                                        />

                                </div>

                             </div>   
                            </div>

                           {/* Card-2 */}
                           <div className="w-[316px] h-[383px]">
                                <Image
                                
                                src={'/Vector/team-user2.png'}
                                alt=""
                                width={316}
                                height={231}
                                    
                                />

                                {/* Card-Content */}
                                <div className="w-[316px] h-[152px] ml-24 mt-8">
                                    <h5 className="w-[83px] h-6 text-[#252B42] text-base font-bold mb-4 ml-7" >UserName</h5>
                                    <h6 className="w-[77px] h-6 text-[#737373] font-bold mb-4 ml-7">Profession</h6>


                                {/* Social Icons */}
                                   
                                    <div className="w-[112px] h-6 flex gap-8 ">
                                        
                                     {/* Facebook-Icon */}
                                    <Image
                                        src={ '/Vector/Facebook-Icon.png'}
                                        alt="Loading"
                                        width={24}
                                        height={24}
                                        
                                        />

                                       {/* Instagram-Icon */}
                                      <Image
                                        src={ '/Vector/Instagram-Icon.png'}
                                        alt="Loading"
                                        width={24}
                                        height={24}
                                        
                                        />

                                         {/* Twitter-Icon */}
                                        <Image
                                        src={ '/Vector/Twitter-Icon.png'}
                                        alt="Loading"
                                        width={24}
                                        height={24}
                                        
                                        />

                                </div>

                             </div>   
                            </div>

                            {/* Card-3 */}
                            <div className="w-[316px] h-[383px]">
                                <Image
                                
                                src={'/Vector/team-user3.png'}
                                alt=""
                                width={316}
                                height={231}
                                    
                                />

                                {/* Card-Content */}
                                <div className="w-[316px] h-[152px] ml-24 mt-8">
                                    <h5 className="w-[83px] h-6 text-[#252B42] text-base font-bold mb-4 ml-7" >UserName</h5>
                                    <h6 className="w-[77px] h-6 text-[#737373] font-bold mb-4 ml-7">Profession</h6>


                                {/* Social Icons */}
                                   
                                    <div className="w-[112px] h-6 flex gap-8 ">
                                        
                                     {/* Facebook-Icon */}
                                    <Image
                                        src={ '/Vector/Facebook-Icon.png'}
                                        alt="Loading"
                                        width={24}
                                        height={24}
                                        
                                        />

                                       {/* Instagram-Icon */}
                                      <Image
                                        src={ '/Vector/Instagram-Icon.png'}
                                        alt="Loading"
                                        width={24}
                                        height={24}
                                        
                                        />

                                         {/* Twitter-Icon */}
                                        <Image
                                        src={ '/Vector/Twitter-Icon.png'}
                                        alt="Loading"
                                        width={24}
                                        height={24}
                                        
                                        />

                                </div>

                             </div>   
                            </div>

                        </div>

                    </div>

                </div>

              
                {/* Client */}

                <div className="w-[1440px] h-[479px] ml-40">

                    {/* Container */}

                    <div className="w-[1050px] h-[479px] bg-[#FAFAFA] ">

                        {/* Row */}

                        <div className="w-[864px] h-[120px]">

                            {/* Main Content */}

                            <div className="w-[864px] h-[120px] gap-8 text-center ml-[110px] pt-10">

                                <h1 className="text-[#252B42] font-bold text-xl">Big Companies Are Here</h1>
                                 <p className="w-[547px] h-[40px] text-[#737373] text-sm ml-[155px] pt-5">Problems trying to resolve the conflict between <br />
                                 the two major realms of Classical physics: Newtonian mechanics </p>

                            </div>

                        </div>

                        {/* Row-2 */}
                        <div className="w-[1054px] h-[175px] pt-5">

                       <ClientImage />
                        </div>


                    </div>

                </div>

                
                {/* Work With Us */}
                
                <div className="w-[1440px] h-[636px]  ">
                    <div className="w-[1050px] h-[636px] bg-[#2A7CC7] ml-40 flex gap-10">


                    <div className="w-[438px] h-[238px] gap-6 pt-[250px] ">
                    
                        <h5 className="w-[128px] h-6 font-bold text-[#FFFFFF] ml-8">WORK WITH US</h5>
                            <h2 className="w-[440px] h-[50px] font-bold text-[#FFFFFF] text-[40px] pt-5 ml-8">Now Lets grow Yours</h2>
                            <p className="w-[440px] h-[40px] font-meduim pt-10 ml-8 ">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>

                    </div>

                        <Image
                        
                            src={'/Vector/Shop-cover8.png'}
                            alt="Loding"
                            width={ 590}
                            height={640}
                        
                        />
                     
                    </div>
                </div>
              
                {/* Footer */}
                <div className="ml-10">
               <Footer />

                </div>
            </div>

        </>


    )
}

export default About;