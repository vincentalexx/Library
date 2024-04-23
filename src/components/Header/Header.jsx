import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'

const Header = () => {
  return (
    <div>
        <header>
            <Navbar />
            <div className='header-content flex flex-col justify-center items-center text-white'>
                <p className='w-[80vw] text-center text-[8vw] md:text-[6vw] xl:text-[5vw]'>Find Your Book of Choice.</p>
                <p className='w-[70vw] text-center text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia omnis earum delectus, id eligendi nam molestias porro doloribus ullam unde rem. Nihil, blanditiis inventore!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header