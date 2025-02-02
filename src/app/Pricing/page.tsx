import Navbar1 from "../components/Navbar1";


const Pricing = () => {
    

    return (
    
        <>
        <div className="w-[1440px] h-[3634px] bg-[#FFFFFF]">
                
                {/* Pricing */}
                
                <div className="w-[1440px] h-[1162px] bg-[#FAFAFA]">
              
                    {/* Container */}
                    <div className="w-[1050px] h-[1600px] ">

                        {/* Inner Header */}
                        <div className="w-[1440px] h-[384px] bg-[#FFFFFF]">

                            {/* Navbar */}
                            <div> <Navbar1 /> </div>
                        
                            {/* Container2 */}
                            <div className="w-[870px] h-[280px] ">

                                {/* Row */}
                                <div className="w-[427px] h-[180px] ml-auto">

                                    {/* Main Content */}

                                    <h5 className="w-[71px] h-6 text-[#737373] text-xl font-bold text-center ml-40 mt-10">PRICING</h5>
                                    <h2 className=" w-[427px] h-[80px] text-[#252B42] font-bold text-6xl mt-20 ">Simple Pricing</h2>
                                    


                                </div>

                            </div>

                        </div>


                    </div>




                </div>







        </div>
        
        
        </>
    )
}

export default Pricing;