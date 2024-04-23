import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {
  return (
    <div>
        <div>
            <form >
                <div className='flex justify-center items-center bg-white py-5 rounded-full px-10'>
                    <input type="text" placeholder='The Lost World ...' className='bg-transparent text-black lg:w-[25vw] pl-5' />
                    <button type='submit'>
                        <FaSearch size={28} className='text-black hover:text-gray-400'/>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SearchForm