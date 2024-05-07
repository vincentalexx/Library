import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Pagination = ({totalPost, postPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalPost/postPerPage); i++){
        pages.push(i);
    }

    
    function prev(currentPage){
        console.log(currentPage);
    }

  return (
    <div className='mt-20 flex items-center'>
        <button onClick={prev(currentPage)}>
            <HiChevronLeft size={35} style={{color: ''}} />
        </button>
        {
            pages.map((page, index) => {
                return <button className={`w-10 border border-black hover:bg-gray-300 transition-all 0.5s ease-out mx-2 ${page === currentPage ? 'bg-black text-white' : ''}`} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })
        }
        <button>
            <HiChevronRight size={35} style={{color: ''}} />
        </button>
    </div>
  )
}

export default Pagination