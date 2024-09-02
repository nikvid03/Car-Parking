import React from 'react'

function Home() {
  return (
    <div className=''>
    <section>
      <div className='flex flex-row justify-between mt-[100px]'>
        <div>
          <h1 className='font-bold text-6xl'>Parking</h1>
          <p className='font-semibold text-3xl mt-[20px]'>⚡Park with ease!</p>
        </div>
        <div>
          <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg
  shadow-gray-500" src='https://images.unsplash.com/photo-1597985933897-cfbf9e2464d0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>
      </div>

      <div className='border rouded-tl-3xl mt-[100px] mb-[50px] bg-blue-200'>

        <div className=''>
          <h1 className='font-medium text-4xl mt-[50px]'>Onboarding car owners to park with ease in low prise</h1>
          <p className='text-xl mt-[40px] '>Just click to book parking slot</p>
        </div>


        <div className='flex flex-row mt-[140px] mb-[40px]'>
          <div className='ml-[15px]'>
            <h1 className='text-3xl font-semibold'>Give place to earn</h1>
            <p className='text-xl  mt-[30px]'> Fill the basic details <b>& make your empty place</b> your earning source to help you <b>grow</b><b></b></p>
            <button className='mt-[20px] bg-blue-600 border rounded-xl px-[15px]
   py-[15px] font-semibold text-xl text-white'>
              <a href='/owner'>Owner register --&gt;</a></button>
          </div>
          <div>
            <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg ml-[60px]
    shadow-gray-500" src='https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </div>
        </div>

        <div className='flex flex-row mt-[140px] mb-[40px]'>
          <div>
            <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg ml-[55px]
   shadow-gray-500" src='https://images.unsplash.com/photo-1520803687-33c813e24051?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </div>
          <div className='ml-[55px]'>
            <h1 className='text-3xl font-semibold'>User</h1>
            <p className='text-xl  mt-[30px]'> ... </p>
            <button className='mt-[20px] bg-blue-600 border rounded-xl px-[15px]
  py-[15px] font-semibold text-xl text-white'>
              <a href='/user'>User register --&gt;</a></button>
          </div>

        </div>

 

      </div>

    </section>


  </div>
  )
}

export default Home
