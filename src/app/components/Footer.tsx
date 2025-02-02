import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
      <div>
          
             
                     <div className='w-[1440px] h-[488px]'>
                          <div className='w-[1440px] h-[142px]'>
          
                              {/* Container */}
                              <div className='w-[1050px] h-[138px] mx-[195px] pt-16'>
          
                                  {/* Row */}
                                  <div className='w-[1049.5px] h-[58px] flex gap-[577.5px]'>
                                      <div className='w-[236px] h-[58px] '>
                                          <h1 className='font-bold text-black '>Bandage</h1>
          
                                      </div>
          
                                      <div className='w-[236px] h-6 flex gap-5'>
          
                                          <Image
                                              src={'/Vector/Facebook.png'}
                                              alt='Facebook'
                                              width={24}
                                              height={24}
          
          
          
                                          />
          
                                          <Image
                                              src={'/Vector/Instagram.png'}
                                              alt='Facebook'
                                              width={24}
                                              height={24}
          
          
          
                                          />
          
                                          <Image
                                              src={'/Vector/Twitter.png'}
                                              alt='Facebook'
                                              width={24}
                                              height={24}
          
          
          
                                          />
          
          
          
                                      </div>
          
          
          
          
                                  </div>
          
                              </div>
                          </div>
          
          
          
          
          
                          {/* Footer-End */}
          
                          <div className='w-[1440px] h-[272px]  bg-[#FFFFFF]'>
          
                              {/* Container */}
                              <div className='w-[1050px] h-[272px] mx-[195px] pt-16'>
          
          
                                  {/* Row */}
                                  <div className='w-[1041px] h-[170px] flex'>
                                      {/* 1st */}
                                      <div className='w-[148px] h-[170px]'>
          
                                          <h4 className='font-bold text-black'>Company Info</h4>
                                          <p className='text-[#737373] mt-3'>About Us</p>
                                          <p className='text-[#737373] mt-3'>Carrier</p>
                                          <p className='text-[#737373] mt-3'>We Are Hiring</p>
                                          <p className='text-[#737373] mt-3'>Blog</p>
          
          
                                      </div>
          
                                      {/* 2nd */}
                                      <div className='w-[148px] h-[170px]'>
          
                                          <h4 className='font-bold text-black'>Legal</h4>
                                          <p className='text-[#737373] mt-3'>About Us</p>
                                          <p className='text-[#737373] mt-3'>Carrier</p>
                                          <p className='text-[#737373] mt-3'>We Are Hiring</p>
                                          <p className='text-[#737373] mt-3'>Blog</p>
          
          
                                      </div>
          
          
                                      {/* 3rd */}
                                      <div className='w-[148px] h-[170px]'>
          
                                          <h4 className='font-bold text-black'>Features</h4>
                                          <p className='text-[#737373] mt-3'>About Us</p>
                                          <p className='text-[#737373] mt-3'>Carrier</p>
                                          <p className='text-[#737373] mt-3'>We Are Hiring</p>
                                          <p className='text-[#737373] mt-3'>Blog</p>
          
          
                                      </div>
                                      {/* 4rt */}
                                      <div className='w-[148px] h-[170px]'>
          
                                          <h4 className='font-bold text-black'>Resources</h4>
                                          <p className='text-[#737373] mt-3'>About Us</p>
                                          <p className='text-[#737373] mt-3'>Carrier</p>
                                          <p className='text-[#737373] mt-3'>We Are Hiring</p>
                                          <p className='text-[#737373] mt-3'>Blog</p>
          
          
                                      </div>
                                      {/* 5th */}
                                      <div className='w-[148px] h-[170px]'>
          
                                          <h4 className='font-bold text-black'>Get In Touch</h4>
          
                                          <div className='w-[321px] h-[58px] flex'>
                                              <input type="text" placeholder='Enter Your Email' className='w-[321px] h-[58px] mt-3 text-black border border-[#23A6F0]' />
                                              <button type='button' className='text-white bg-[#23A6F0] rounded-sm w-[117px] h-[58px] mt-3'>Subscribe</button>
                                          </div>
                                          <p className='text-[#737373] w-[175px] h-[28px] mt-5'>Lore imp sum dolor Amit</p>
          
          
                                      </div>
                                      
          
          
          
          
                                  </div>
          
                              </div>
          
          
                          </div>
          
          
                      </div>
          
    </div>
  )
}
