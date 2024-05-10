import React from 'react'
import Cube from '../components/Cube'
 const Home = () => {
  return (
    <div className='bg-[#ACCEF0] h-auto w-full'>
   
    <div className=" min-h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-row justify-around w-full px-5  ">
        <div className="text-left p-3">
          <p className=" " >Hi, I am</p>
          <br />
          <h1 className="text-8xl font-extrabold">M R Suraj</h1>
          <br />
          <p className=' text-3xl'> I draw, design, and develop websites.</p>
        <br />
          <div className="mt-5 space-x-4">
            <button className="bg-yellow-500 px-6 py-2 rounded">Resume</button>
            <button className="bg-yellow-500 px-6 py-2 rounded">Contact</button>
          </div>
        </div>
        <div className=' mt-10'>
          <Cube />
        </div>
        
      </div>

    </div>
    </div>
  )
}

export default Home
