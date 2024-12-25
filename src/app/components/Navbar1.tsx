
import Link from 'next/link';

const Navbar1 = () => {

    return (
        
         <>
        
        <div className="w-[1322px] h-[91px]">


      <nav className="w-[1439px] h-[58px] bg-[#FFFFFF] text-black flex">

{/* Brand Name */}
<div className="w-[187px] h-[58px] ml-20 mt-3">
    <h1 className='text-[24px] font-bold'>Bandage</h1>

</div>

    {/* Collapse Navbar  */}

<div className="w-[1155px] h-[58px] flex mx-36">

    {/* Navigation Menu */}
    <div>
        <ul className="hidden md:flex w-[361px] h-[25px] mt-5 gap-5 font-bold ">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/Shop'}>Shop</Link></li>
            <li><Link href={'/About'}>About</Link></li>
            <li><Link href={'/blog'}>Blog</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            <li><Link href={'/pages'}>Pages</Link></li>
           
        </ul>
    </div>

                    



         {/* Buttons */}
                
                <div className='w-[300px] h-[52px] flex gap-10 mx-[350px] justify-center items-center mt-2'>
                    <button type='button' className='w-[41px] h-[22px] text-[#23A6F0] font-bold'>Login</button>
                    <button type='button' className='w-[214px] h-[52px] bg-[#23A6F0] text-white rounded font-bold'>Become a member</button>
                    

                </div>
 
    </div>
    </nav>
        
    </div>    
            

             
         </>
        
    )
}


export default Navbar1 