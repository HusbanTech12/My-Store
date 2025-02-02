import Navbar2 from "../components/Navbar2";

const Blog = () => {
    return (
        
        <>
            
            {/* Main-Container */}
            <div className="w-[1440px] h-[3634px] bg-[#FAFAFA] ">

                 {/* Container */}
                <div className="w-[1050px] h-[1600px] pt-10">
                    
                    {/* Inner-Head */}
                    <div className="w-[1050px] h-[384px] bg-[#FFFFFF] ml-32">


                        {/* Container */}
                        <div className="w-[870px] h-[280px] ">

                            <div> <Navbar2 /></div>
                            
                            {/* Row */}
                            <div className="w-[427px] h-[180px] mx-80 mt-20">
                                <h5 className="w-[71px] h-6 text-[#737373] text-xl font-bold ml-36">PRICING</h5>
                                <h1 className="w-[427px] h-[80px] text-[#252B42] text-6xl font-bold mt-5">Simple Pricing</h1>
                                 
                            </div>

                        </div>

                        
                    </div>


                    {/* Row2 */}

                    <div className="w-[633px] h-[100px] ml-[540px] mt-10">

                        {/* Main-Content */}
                        <div className="w-[625px] h-[100px]">
                            <h2 className="w-[144px] h-[50px] text-[#252B42] text-5xl font-bold ml-10">Pricing</h2>
                            <p className="w-[500px] h-[40px] text-[#737373] text-sm mr-5">Problems trying to resolve the conflict between <br /> 
                            the two major realms of Classical physics: Newtonian mechanics </p>
                    
                        </div>


                    </div>



            </div>
                
            
            </div> 
        </>
    )


}

export default Blog;