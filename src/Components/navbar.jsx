import React from 'react'
import logo from '../assets/hospital.avif'

const navbar = (props) => {
    let brand= props.brand;
  return (
    <nav className='inline-flex justify-between w-full px-24 h-20 bg-blue-100'>
            <div className='inline-flex w-1/3 p-1'>
                <img src={logo} alt="hello" className='h-14 self-center'/>
                <div className='w-fit px-2 content-center'>
                    <h2 className='text-sky-500 font-bold'>{brand}</h2>
                    <h3 className='text-gray-700 italic'>A Hospital that lives in your pocket</h3>
                </div>
            </div>
            <div className='content-center w-2/3 p-1'>
                <ul className=' items-center list-none inline-flex justify-between w-full font-bold'>
                    <li className='nav-item hover:text-green-600'><a href="#home">Home</a></li>
                    <li className='nav-item hover:text-green-600'><a href="#about">About us</a></li>
                    <li className='nav-item hover:text-green-600'><a href="#services">Services</a></li>
                    <li className='nav-item hover:text-green-600'><a href="#gallery">Gallery</a></li>
                    <li className='nav-item hover:text-green-600'><a href="#news">News</a></li>
                    <li className='nav-item bg-sky-400 hover:bg-sky-300 px-4 py-1 rounded text-white'><a href="#contact">Contact us</a></li>
                </ul>
            </div>
        </nav>
  )
}

export default navbar