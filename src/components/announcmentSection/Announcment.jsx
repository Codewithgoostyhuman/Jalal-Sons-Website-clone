import React from 'react'

const Announcment = () => {
  return (
    <div className='font-medium bg-red-600 text-white p-4 flex flex-col items-center gap-2 w-dvw sm:w-full md:w-full lg:w-full xl:w-full'>
      <div>
        <span className='text-sm'>Online Payments are not supported for grocery Purchases.</span>
      </div>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-evenly items-center gap-2 w-dvh sm:w-full md:w-full lg:w-full xl:w-full'>
        <span className='text-sm'>Friday break time 12:30 pm to 2:30 pm</span>
        <span className='text-sm'>Pan Asian after 12 pm. Enjoy FREE delivery on orders above Rupees 2498</span>
        <span className='text-sm'>Delivery timings are 9:00 am to 11:30 pm</span>
      </div>
    </div>
  )
}

export default Announcment
