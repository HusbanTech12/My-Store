import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
        
    return (
          
        <>
            {/* Header */}
            <header className="w-[1440px] h-[770px] bg-green-700">
                
                    {/* Light Navbar */}
                <nav className="w-[1439px] h-[58px] bg-[#252B42] flex">

                    {/* Brand Name */}
                    <div className="w-[187px] h-[58px] ml-20 mt-3">
                        <h1 className='text-[24px] font-bold'>Bandage</h1>

                    </div>
                    
                        {/* Collapse Navbar  */}

                    <div className="w-[1155px] h-[58px] flex ">

                        {/* Navigation Menu */}
                        <div>
                            <ul className="w-[361px] h-[25px] flex mt-5 gap-5 font-medium">
                                <li><Link href={'/'}>Home</Link></li>
                                <li><Link href={'/'}>Shop</Link></li>
                                <li><Link href={'/'}>About</Link></li>
                                <li><Link href={'/'}>Blog</Link></li>
                                <li><Link href={'/'}>Contact</Link></li>
                                <li><Link href={'/'}>Pages</Link></li>
                               
                            </ul>
                        </div>

                        
                            <ul className='w-[324px] h-[54px] flex ml-[410px] mt-5 gap-5'>

                                {/* Login */}
                                <li className='w-[166px] h-[54px] flex gap-2'>
                                    <div className='w-[12px] h-[12px] flex mt-1'>

                                    <Image
                                        src={'/Vector/Login.png' }
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
                

             {/* Main Content  */}
                <div className='w-[1439px] h-[716px] bg-[url("/Vector/shop-hero.png")] bg-cover'>
                    <div className='w-[1044] h-[651px] pt-[48px] pl-[197.5px]'>
                        <div className='w-[1044px] h-[427px] my-[48px]'>

                       <div className='w-[599px] h-[331px] mt-52'>
                                <h5 className='w-[122px] h-6 leading-6'>summer 2024</h5><br />
                                
                        <h1 className='w-[548px] h-[80px] font-bold text-[58px] leading-[80px]'>New Collection</h1><br />
                        <h4 className='w-[376px] h-[60px] font-medium text-[20px] leading-[30px]'>We know how large objects will act, but things on a small scale.</h4><br />
                          
                        <button type='button' className='w-[221px] h-[62px] bg-[#2DC071] rounded-[5px] font-medium'>Shop Now</button>
                        </div> 
                        
                        </div>
                    </div>
           </div>
             
        </header>
        
        
        
        
        
        
        </>


        )    


} 