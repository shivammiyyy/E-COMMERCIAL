import React from 'react'

export const NewsLetter = () => {

    const onSubmitHandler =(event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
        Be the first to know about new arrivals, sales & promos!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item-center gap-2 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required/>
            <button type='submit' className='bg-black text-white text-xs py-10 px-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}
