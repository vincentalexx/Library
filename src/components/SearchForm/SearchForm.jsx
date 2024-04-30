import React, { useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-center items-center border border-black bg-white py-5 rounded-full px-10'>
                    <input type="text" placeholder='The Lost World ...' ref = {searchText} className='bg-transparent text-black lg:w-[25vw] pl-5' />
                    <button type='submit' onClick={handleSubmit}>
                        <FaSearch size={25} className='text-black hover:text-gray-400 transition-all 1s'/>
                    </button>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default SearchForm