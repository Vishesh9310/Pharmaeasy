import React from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import team_pic from '../assets/group2.jpg'
import tracker from '../assets/tracker.png'
import consultant from '../assets/consultant.png'
import shopping from '../assets/cart.png'
import nurshing_care from '../assets/nurse.png'

function Home() {
    const brandname = "PharmaEasy";
    return (
        <>
            <Nav brand={brandname}/>

            <section className='bg-sky-200 px-24 h-fit pb-30'>
                <div className='justify-between inline-flex h-fit'>
                    <div className='w-1/2 h-fit py-20 pr-20 '>
                        <button className='w-fit bg-sky-400 hover:bg-sky-300 px-4 py-1 rounded text-white'>Experience</button>
                        <p className='font-bold text-6xl pt-2'>Your heath our priority</p>
                        <p className='leading-snug pt-6 italic'>
                            Discover expert fitness advice, top-quality health products, and personalized wellness
                            plans all in one place. Wheather you're looking to enhance your fitness routine or shop for premium health essentials, <span className='text-green-900 font-bold leading-'>{brandname}</span> is
                            here to support your journey to a healthier lifestyle. Start today and take the first step towards a better you!
                        </p>
                    </div>

                    <div className='w-1/2 content-center'>
                        <img src={team_pic} alt="we are best in our work" className='w-full h-96' />
                    </div>
                </div>


                <div className='bg-blue-50 inline-flex justify-between gap-5 w-full p-3 shadow-gray-400 shadow-lg rounded-lg'>
                    <div className='w-1/4 inline-flex p-1'>
                        <img src={tracker} alt="hello" className='h-14 self-center' />
                        <div className='w-fit px-2 content-center'>
                            <h2 className='text-sky-400 font-bold'>prakash </h2>
                            <h3 className='font-bold'>Health tracker</h3>
                        </div>
                    </div>
                    <div className='w-1/4 inline-flex  p-1'>
                        <img src={nurshing_care} alt="hello" className='h-14 self-center' />
                        <div className='w-fit px-2 content-center'>
                            <h2 className='text-sky-400 font-bold'>Sourav</h2>
                            <h3 className='font-bold'>Nurse facilities</h3>
                        </div>
                    </div>
                    <div className='w-1/4 inline-flex p-1'>
                        <img src={consultant} alt="hello" className='h-14 self-center' />
                        <div className='w-fit px-2 content-center'>
                            <h2 className='text-sky-400 font-bold'>Pallavi</h2>
                            <h3 className='font-bold'>Online Consultant</h3>
                        </div>
                    </div>
                    <div className='w-1/4 inline-flex p-1'>
                        <img src={shopping} alt="hello" className='h-14 self-center' />
                        <div className='w-fit px-2 content-center'>
                            <h2 className='text-sky-400 font-bold'>Neha</h2>
                            <h3 className='font-bold'>Medical Product</h3>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home