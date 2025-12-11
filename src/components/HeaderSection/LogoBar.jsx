import React from 'react'
import jalalsonLogo from '../../assets/jalasons-logo.webp'

const LogoBar = () => {
  return (
    <div className='bg-black w-dvw h-fit flex items-center justify-center border-b-4 border-red-200 text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>
        <div className='h-fit w-full sm:w-full md:w-fit lg:w-fit xl:w-fit flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row items-center justify-between p-2 text-white'>
            <div className=' h-fit w-fit items-center flex flex-row md:flex-row gap-4 m-4 p-2'>
                <div className='w-fit'><img width="20" height="20" src="https://img.icons8.com/material-rounded/24/FFFFFF/marker.png" alt="marker"/></div>
                <div className='w-27 sm:w-32 md:w-37 lg:w-44 xl:w-50'>location selection menu</div>
            </div>
            <img src="src\assets\jalasons-logo.webp" alt="Jalalson Logo" className='h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 xl:w-130 lg:w-90 md:w-50 sm:w-30 object-contain m-4 transition-all duration-1000 ease-in-out'/>
            <div className='h-fit w-full sm:w-full md:w-80 lg:w-100 xl:w-100 items-center justify-evenly flex flex-row-reverse xl:flex-row lg:flex-row md:flex-row sm:flex-row-reverse gap-4 m-auto'>
                <div className='h-fit w-1/2 sm:w-1/2 md:w-fit lg:w-fit xl:w-fit items-center justify-end  sm:justify-end flex flex-row gap-4 m-0'>
                    <div><img width="20" height="20" src="https://img.icons8.com/material-sharp/24/FFFFFF/search.png" alt="search"/></div>
                    <div><img width="20" height="20" src="https://img.icons8.com/material-rounded/24/FFFFFF/user-male-circle.png" alt="user-male-circle"/></div>
                    <div><img width="20" height="20" src="https://img.icons8.com/material-rounded/24/FFFFFF/shopping-cart.png" alt="shopping-cart"/></div>
                </div>
                <div className='h-fit w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 items-center flex flex-row gap-4 m-0'>
                    <button className= 'bg-red-700 pt-1 pb-1 pr-4 pl-4 xl:pt-2 xl:pb-2 xl:pl-10 xl:pr-10  lg:pt-2 lg:pb-2 lg:pl-10 lg:pr-10  md:pt-2 md:pb-2 md:pl-4 md:pr-4  sm:pt-2 sm:pb-2 sm:pl-4 sm:pr-4 text-sm sm:text-sm rounded-2xl font-bold font-sans'>JS New Arrivals</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LogoBar
