import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import SearchForm from '../SearchForm/SearchForm';
import Layout from '../Layout/Layout';
import Pagination from '../Pagination/Pagination';
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

  const [bookList, setBookList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);
  
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = booksWithCovers.slice(firstPostIndex, lastPostIndex);

  console.log(books);

  if(loading) return <Loading />;

  return (
    <Layout>
      <section className='flex flex-col items-center py-20 pt-[15vh]'>
          <SearchForm />
        <div className='px-[10vw] xl:px-[15vw]'>
          <h2 className='font-bold text-6xl py-10'>{resultTitle}</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center'>
            {
              currentPost.map((item, index) => {
                return (
                  <Book key = {index} {...item} />
                )
              })
            }
            {/* {
              booksWithCovers.slice(0, 30).map((item, index) => {
                return (
                  <Book key = {index} {...item} />
                )
              })
            } */}
          </div>
        </div>
        <Pagination totalPost={booksWithCovers.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />

      </section>
    </Layout>
  )
}

export default BookList