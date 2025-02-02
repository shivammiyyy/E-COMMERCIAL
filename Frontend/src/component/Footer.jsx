import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div >
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:2-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum dolorum in ab? At tempore magnam sequi quam sit molestiae ipsum odio, soluta provident laboriosam animi id, ad exercitationem quo.
                </p>
            </div>

            <div >
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium nb-5'> GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-3243-4323-33</li>
                    <li>trendi@fy.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>CopyRight@2025fy.com- All Rights are Reserved</p>
        </div>

    </div>
  )
}
