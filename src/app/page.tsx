import Navbar from './components/Navbar';

import Header from "./components/Header";
import Cards from "./components/Cards";

export default function Home() {
  return (

    
      
      <>
      {/* Main Container */}
      <div className=' w-[414px] h-[14518px] sm:w-[1440px] sm:h-[6197px] lg:w-[1440px] lg:h-[6197px] '>
        
        <div><Navbar /></div>
        <div><Header /></div>
       <div><Cards /></div> 
       

        </div>
      </>



  )    
  

}