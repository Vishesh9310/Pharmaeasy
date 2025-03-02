import React from 'react'
import Nav from '../Components/navbar'
import Label from '../Components/label'
import Footer from '../Components/footer'

function News() {
  const brandname = "Pharmaeasy";
  return (
    <>
    <Nav brand ={brandname}/>

    <section className='bg-pink-500'>
      hello munna
    </section>

    <Label/>
    <Footer/>
    </>
  )
}

export default News