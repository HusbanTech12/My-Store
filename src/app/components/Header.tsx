import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
        
    return (
          
        <>
            {/* Header */}
            <header className="w-[1440px] h-[770px] bg-green-700">
                
            
                
                

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