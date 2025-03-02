import React from 'react'

function footer() {
    return (
        <footer className='bg-blue-100 px-24 h-fit pb-30 content-center w-full'>
            <div>
                <div>
                    <h1 className='font-bold text-5xl'>Address</h1>
                    <p className='text-xl'>Contact no.</p>
                </div>
                <ul className='justify-between inline-flex gap-5'>
                    <li className='text-orange-500 font-bold'><a href="#google">Google</a></li>
                    <li className='text-blue-500 font-bold'><a href="#facebook">Facebook</a></li>
                    <li className='text-pink-500 font-bold'><a href="#Instagram">Instagram</a></li>
                    <li className='text-sky-500 font-bold'><a href="#Linkedin">Linkedin</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default footer