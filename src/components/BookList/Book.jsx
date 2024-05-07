import React from 'react'
import { Link } from 'react-router-dom'

const Book = (book) => {
    console.log(book.author);
  return (
      <div className='flex justify-center py-5 border border-black rounded-2xl w-[60vw] min-h-[110vw] md:w-[35vw] md:min-h-[70vw] lg:w-[25vw] lg:min-h-[45vw] xl:w-[20vw] xl:min-h-[35vw] hover:bg-gray-200'>
        <Link to={`/book/${book.id}`} {...book} className='flex flex-col  items-center'>
            <div className='max-w-[80%] text-center mb-2 flex justify-center items-center'>
                <span className='font-bold'>{book.title}</span>
            </div>
            <img src={book.cover_img} alt="" className='max-w-[45vw] h-[75vw] md:w-[30vw] md:h-[45vw] lg:max-w-[18vw] lg:h-[25vw]' />
            <div className='max-w-[50vw] md:max-w-[30vw] lg:max-w-[18vw] text-center'>
                <div className='mt-5 mb-2'>
                    <span className='font-semibold'>Author : </span>
                    {/* <span>{book.author.join(', ')}</span> */}
                    <span>{book.author}</span>
                </div>
                <div className='mb-2'>
                    <span className='font-semibold'>Total Editions : </span>
                    <span>{book.edition_count}</span>
                </div>
                <div className='mb-2'>
                    <span className='font-semibold'>First Publish Year : </span>
                    <span>{book.first_publish_year}</span>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Book