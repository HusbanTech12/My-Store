import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

    return (
        
    
        
        <div className="w-[1440px] h-[60px] ">


      <nav className="w-[1439px] h-[58px] bg-[#252B42] flex">

{/* Brand Name */}
<div className="w-[187px] h-[58px] ml-20 mt-3">
    <h1 className='text-[24px] font-bold'>Bandage</h1>

</div>

    {/* Collapse Navbar  */}

<div className="w-[1155px] h-[58px] flex ">

    {/* Navigation Menu */}
    <div>
        <ul className="hidden md:flex w-[361px] h-[25px] mt-5 gap-5 font-medium">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/Shop'}>Shop</Link></li>
            <li><Link href={'/About'}>About</Link></li>
            <li><Link href={'/blog'}>Blog</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            <li><Link href={'/pages'}>Pages</Link></li>
           
        </ul>
    </div>

    
        <ul className='w-[324px] h-[54px] flex ml-[410px] mt-5 gap-5'>

            {/* Login */}
            <li className='w-[166px] h-[54px] flex gap-2'>
                <div className='w-[12px] h-[12px] flex mt-1'>

                <Image
                    src={'/Vector/Login.png'}
                    alt='Login icon'
                    width={12}
                    height={12}                                        
                />

               </div>
            
                <Link href={'#'}> Login / Register</Link>
            
                 </li>

                  
                {/* Search */}
                <li className='w-[46px] h-[46px] flex'>
                <div className='w-[12px] h-[12px] flex mt-1'>

                    
                       <Link href={'#'}>
                <Image
                    src={'/Vector/Search.png' }
                    alt='Search icon'
                    width={12}
                    height={12}
    
                    />

                      </Link>
                    </div>
                 </li>
            
                 {/* Shopping */}
                <li className='w-[56px] h-[46px] flex'>
                <div className='w-[12px] h-[12px] flex mt-1'>

                    <Link href={'#'}>
                <Image
                    src={'/Vector/Shopping.png' }
                    alt='Shopping icon'
                    width={12}
                    height={12}

                    />
                    </Link>
                    </div>
                  </li>
             
            
                 {/* Feedback */}
                <li className='w-[56px] h-[46px] flex'>
                <div className='w-[20px] h-[20px] flex mt-1'>

                    <Link href={'#'}>
              <Image
                    src={'/Vector/Feedback.png' }
                    alt='Feedback icon'
                    width={12}
                    height={12}
                    
                    />
                    </Link>
                     </div>
             
        </li>
    </ul>
    


    

</div>

</nav>
        
    </div>    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    

        
    )
}


export default Navbar 