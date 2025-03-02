import React from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import Card from '../Components/sevices_card'
import Lable from '../Components/lable'

import logo1 from '../assets/logo1.jpg'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.jpg'
import logo4 from '../assets/logo4.jpg'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.jpg'
import logo7 from '../assets/logo7.jpg'
import logo8 from '../assets/logo8.jpg'
import logo9 from '../assets/logo9.jpg'
import logo10 from '../assets/logo10.png'

function Services() {
  const brandname = "Pharmaeasy";
  const location = "Noida";
  const address = "E2, Block e, sector-26";
  const state = "Uttar-Pradesh";
  const pincode = 201301;
  const tel = 9310365061;
  const email = "vk866797@gmail.com";
  const emer_call = 9310365061;

  const data1 = { img: logo1, h: 'M/F Nurse', p: 'vishesh' };
  const data2 = { img: logo2, h: 'M/F Attendant', p: 'vishesh' };
  const data3 = { img: logo3, h: 'Baby Sitter', p: 'vishesh' };
  const data4 = { img: logo4, h: 'Physiotherapist', p: 'vishesh' };
  const data5 = { img: logo5, h: 'Old Age Care Taker', p: 'vishesh' };
  const data6 = { img: logo6, h: 'Part Time Staff', p: 'vishesh' };
  const data7 = { img: logo7, h: 'Injection On Call', p: 'vishesh' };
  const data8 = { img: logo8, h: 'Dressing On Call', p: 'vishesh' };
  const data9 = { img: logo9, h: 'Medical Equipment On Rent', p: 'vishesh' };
  const data10 = { img: logo10, h: 'Medical Equipment On Sell', p: 'vishesh' };

  return (
    <>
      <Nav brand={brandname} />

      <section className='bg-green-200 text-black h-fit pb-40 px-24'>
        <div className='py-10'>
          <h1 className='font-bold text-2xl'>OUR SERVICES</h1>
          <em>Our Medical Service & Specialties</em>
          <div className=' grid md:grid-cols-4 w-full '>
            <Card data={data1}/>
            <Card data={data2}/>
            <Card data={data3}/>
            <Card data={data4}/>
            <Card data={data5}/>
            <Card data={data6}/>
            <Card data={data7}/>
            <Card data={data8}/>
            <Card data={data9}/>
            <Card data={data10}/>
          </div>
        </div>

        <div className='pb-10'>
          <h1 className='font-bold text-2xl pt-5 text-green-700'>24/7</h1>
          <p>We provide total<br />HealthCare Solutions</p>
        </div>

        <div className='bg-green-300 px-8 py-10 rounded-2xl text-green-900'>
          <h1 className='text-lg font-bolder'>Could not find the what you are looking for?</h1>
          <h2 className='text-xl font-bold mb-3 mt-2'>Request a Callback</h2>
          <form action="">
            <div className='inline-flex gap-2 w-full'>
              <div className='content-center border-2 border-black w-fit rounded px-3'>
                <label htmlFor="name">Name </label>
                <input type="text" id="name" required="" />
              </div>
              <div className='content-center border-2 border-black w-fit rounded pl-3'>
                <label htmlFor="name">Mobile Number </label>
                <input type="tel" id="name" required="" />
                <button className='bg-sky-400 px-3'>Send OTP</button>
              </div>
              <div className='content-center border-2 border-black w-fit rounded px-3'>
                <label htmlFor="otp">Enter OTP </label>
                <input type="text" id="otp" required="" />
              </div>
            </div>
            <input type="submit" className='px-7 py-2 bg-sky-400 rounded mt-8' />
          </form>
        </div>

        <div className='bg-none mx-20'>
          <h3 className='text-xl text-blue-600 pt-8 pb-5 mb-5 border-b border-blue-600'>{brandname} {location}</h3>
          <p>
            {address} {location} {state} {pincode} <br />
            Email: <a className='text-blue-600' href="#email">{email}</a> <br />
            Phone No: <a className='text-blue-600' href="#tel">{tel} </a><br />
            Emergency Contact No: <a className='text-blue-600' href="#emer_call">{emer_call}</a>
          </p>
        </div>
      </section>

      <Lable/>

      <Footer />
    </>
  )
}

export default Services