import React from 'react'
import Nav from '../Components/navbar'
import Label from '../Components/label'
import Footer from '../Components/footer'
import Star from '../assets/Star.jpg'

function About() {
    const brandname = "PharmaEasy";
    
    return (
        <>
            <Nav brand={brandname} />

            <section className='bg-green-200 text-white h-fit pb-40'>
                <div className='px-24 pb-26 bg-[url(C:\Users\Chauh\pharmaeasy\src\assets\doctor_face2.jpg)] bg-cover'>
                    <div className='w-1/2 h-fit py-20 pl-40 '>
                        <p className='font-bold text-6xl pt-2'>We Provide High Solutions for Your Health</p>
                        <p className='leading-snug pt-3 italic'>your problems our problems</p>
                        <button className='w-fit bg-sky-400 hover:bg-sky-300 px-4 py-1 mt-3 rounded-3xl text-white'>Get Started</button>
                    </div>
                </div>
                <div className='px-5 py-10 text-black bg-blue-200 mx-20 my-10 rounded-2xl'>
                    <h1 className='font-bold text-3xl'>About Us:</h1>
                    <p className='py-4 text-lg'>
                        IBP Healthcare Solutions Private Limited was established in 2023. IBP Healthcare Solutions
                        Private Limited is located in Rampuri Surya Nagar Ghaziabad. We are known for providing
                        quality personnel. Who render unmatched services to our clients. We have carved a niche in the
                        market for our excellent level of services.We are one of the best services providers
                        we provide the best quality medical equipment on rent or sale in NCR, Delhi, Noida, and
                        Ghaziabad. To avail ourservices call us on the given number inquire now, we are the best nursing
                        service provider as well. Comparably to other business owners, our customers satisfaction
                        ratio is high, which is our only priority and we strive to continually improve the quality of our
                        services to accommodate the changing needs of our customers.
                    </p>
                    <p className='indent-10 text-lg'>
                        BP Healthcare Solutions Private Limited provides Male Female Nursing Staff in both public and
                        private sectors. We provide male/female attendants for hospitals. Male Female Attendants for
                        Homes, Baby Care, Staff Nurse, Nursing Care. Physiotherapist services etc. We have very
                        experienced staff members with great knowledge of the industry and we are available 24/7.
                        To assit with any requests you may have. We regularly conduct background checks on our
                        employees to ensure that they do not have any police cases registered against them, so you can
                        rest easy knowing that you are in safe hands. We constantly take feedback from our customers
                        about our staff and services so that we can provide the most caring and professional services
                        as per the requirements.
                    </p>
                    <div className='text-green-600 grid grid-cols-2'>
                        <div className='inline-flex py-10 gap-5 content-center'>
                            <img src={Star} alt="hello" className='h-15 w-15' />
                            <div>
                                <h1 className='font-bold text-lg'>500+</h1>
                                <p>Beds Facility</p>
                            </div>
                        </div>
                        <div className='inline-flex py-10 gap-5 content-center'>
                            <img src={Star} alt="hello" className='h-15 w-15' />
                            <div>
                                <h1 className='font-bold text-lg'>633+</h1>
                                <p>Trained Staff</p>
                            </div>
                        </div>
                        <div className='inline-flex gap-5 content-center'>
                            <img src={Star} alt="hello" className='h-15 w-15' />
                            <div>
                                <h1 className='font-bold text-lg'>265+</h1>
                                <p>Doctors</p>
                            </div>
                        </div>
                        <div className='inline-flex gap-5 content-center'>
                            <img src={Star} alt="hello" className='h-15 w-15' />
                            <div>
                                <h1 className='font-bold text-lg'>30+</h1>
                                <p>Specialities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Label />
            <Footer />
        </>
    )
}

export default About