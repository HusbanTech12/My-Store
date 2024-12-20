import Navbar from "../components/Navbar"


const Shop = () => {

return(
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




     </div>
        
    </>
             
             
    )
    
    


}

export default Shop