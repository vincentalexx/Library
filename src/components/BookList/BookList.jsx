import React from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import SearchForm from '../SearchForm/SearchForm';
import Layout from '../Layout/Layout';
import coverImg from "../../images/cover_not_found.webp";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ... singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });
  
  console.log(booksWithCovers);

  if(loading) return <Loading />;

  return (
    <Layout>
      <section className='flex flex-col items-center py-20 pt-[15vh]'>
          <SearchForm />
        <div className='px-[10vw] xl:px-[15vw]'>
          <h2 className='font-bold text-6xl py-10'>{resultTitle}</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center'>
            {
              booksWithCovers.slice(0, 30).map((item, index) => {
                return (
                  <Book key = {index} {...item} />
                )
              })
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BookList