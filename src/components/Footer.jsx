import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className='w-full h-[520px] bg-[#101820] flex justify-center items-center'>

      <div className='w-[1216px] h-[280px] '>
        <div href="/" className="flex items-center h-[160px]">
          <div className='w-[709px] h-[148px] flex text-white flex-col justify-around '>
            <Image src="/logoSempen.svg" alt="Logo" width={124} height={30} />
            <p>Fueling the future</p>
            <div className='flex w-[485px] justify-between'>
              <Link href={"/"}> About Us </Link>
              <Link href={"/"}> Who we are </Link>
              <Link href={"/"}> Sustainable fuels </Link>
              <Link href={"/"}> Projects </Link>

            </div>
          </div>
          <div className='w-[467px] h-[148px]  flex items-center justify-end text-white'>
                <div>
                  <p>Contact information</p>
                  <button className="bg-[#EDEDED] text-[#101820] px-4 py-2 rounded">Contact Us</button>
                
                </div>
          </div>

        </div>
      </div>

    </div>
  )
}

