import React from 'react'
import { useState } from 'react'

const Account = ({isOpen}) => {
  const [emailId, setEmailId] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [signInMode, setSignInMode] = useState(true);

const  validateFields = ()=>{
  return (emailId && password && phoneNumber && confirmPassword && confirmPassword == password)
}
  return (
    <div className={`fixed inset-0 bg-black/40 backdrop-blur-3xl shadow-2xl text-white flex flex-col items-center justify-center z-50 `}>
       <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm shadow-2xl"
          onClick={() => isOpen(false)}
        />
        <div className='text-sm z-50'>Click anywhere on the screen to close</div>
        {/*card*/}
      <div className={` border border-red-200 bg-white p-10 rounded-lg w-auto relative text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl
        transform transition-all duration-700 ease-in-out ${
            isOpen
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-97 opacity-0 translate-y-10"
          }`}>
        {/*header*/}
        <div className='bg-gray-200 rounded-l-full rounded-r-full flex flex-row pl-2 pr-2 h-auto'>
            <div className={`p-2 xl:pl-14 xl:pr-14 lg:pl-12 lg:pr-12 md:pl-10 md:pr-10 sm:pl-8 sm:pr-8 pl-6 pr-6  m-2 rounded-full ${signInMode?`bg-red-500`:`bg-gray-200 text-red-500`} h-auto `} onClick={()=>{setSignInMode(true)}}>Sign In</div>
            <div className={`p-2 xl:pl-14 xl:pr-14 lg:pl-12 lg:pr-12 md:pl-10 md:pr-10 sm:pl-8 sm:pr-8 pl-6 pr-6 m-2 rounded-full ${!signInMode?`bg-red-500`:`bg-gray-200 text-red-500`} h-auto `} onClick={()=>{setSignInMode(false)}}>Sign Up</div>
        </div>
        {/*forum*/}
        <div className='mt-4 text-black '>
            <form className='flex flex-col'>
              {/*Sign in form */}
              {signInMode && (
              <div className='rounded-lg'>
                <label htmlFor="email" className='p-2'>Email:</label><br />
                <input type="email" value={emailId} onChange={(e)=>(setEmailId(e.target.value))} className='outline-none border-gray-300  border w-full rounded-lg bg-gray-100 h-auto p-2' placeholder='Enter Email'/><br />
                <label htmlFor="email" className='p-2'>Password:</label><br />
                <input type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} className='outline-none border border-gray-300 bg-gray-100 w-full rounded-lg h-auto p-2' placeholder='Enter Password'/><br />
              </div>)}
              {/*Sign up form */}
              {!signInMode && (
              <div>
                <label htmlFor="email">Email:</label><br />
                <input type="email" value={emailId} onChange={(e)=>(setEmailId(e.target.value))} className='outline-none border-gray-300  border w-full rounded-lg bg-gray-100 h-auto p-2' placeholder='Enter Email'/><br />
                 <label htmlFor="email">Phone Number:</label><br />
                <input type="tel" value={phoneNumber} onChange={(e)=>(setPhoneNumber(e.target.value))} className={`outline-none border-gray-300  border w-full rounded-lg bg-gray-100 h-auto p-2`} placeholder="Enter Phone Number"/><br />
                <label htmlFor="Password">Password</label><br />
                <input type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} className='outline-none border-gray-300  border w-full rounded-lg bg-gray-100 h-auto p-2' placeholder='Enter Password'/><br />
                <label htmlFor="Confirm Password">Confirm Password</label><br />
                <input type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} className='outline-none border-gray-300  border w-full rounded-lg bg-gray-100 h-auto p-2' placeholder='Re-Enter Password'/><br />
              </div>
              )}
              <button onClick={validateFields()} className='m-auto mt-4 p-2 rounded-lg bg-red-500 text-white  border w-full h-auto'>{signInMode?`Sign In`:`Sign Up`}</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Account
