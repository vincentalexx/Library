import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import coverImg from '../../images/cover_not_found.webp'
import { FaArrowLeft } from 'react-icons/fa';
import Layout from '../Layout/Layout';

const url = 'https://openlibrary.org/works/';

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try {
        const response = await fetch(`${url}${id}.json`);
        const data = await response.json();

        if (data) {
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description.value ? description.value : "No description found",
            title: title,
            coverImg: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else{
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading();
      }
    }
    getBookDetails();
  }, [id]);

  console.log(book)

  if(loading) return <Loader />

  return (
    <Layout>
      <section className='pt-[15vh] mb-[10vh] lg:px-[10vw]'>
        <div className='flex flex-col min-h-[100vh]'>
          <div className='flex flex-col lg:flex justify-between w-full'>
            <button type='button' className='flex items-center ml-14 mb-14 lg:mb-0' onClick={() => navigate('/book')}>
              <FaArrowLeft size={32} />
              <span className='ml-5'>Back</span>
            </button>
            <p className='text-center font-bold text-5xl mb-5'>{book?.title}</p>
            <div className='flex hidden lg:block items-center text-transparent' >
              <FaArrowLeft size={32} />
              <span className='ml-5'>Back</span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center xl:items-start xl:flex-row lg:gap-x-24'>
            <img className='object-contain w-[50vw] xl:w-[20vw] mt-0 mb-10' src={book?.coverImg} alt="cover img" />
            <div>
              <div className='flex mb-5'>
                <p className='w-[20vw] lg:w-[15vw] xl:w-[10vw] font-semibold'>Places </p>
                <p className='w-[50vw] lg:w-[35vw]'>{book?.subject_places}</p>
              </div>
              <div className='flex mb-5'>
                <p className='w-[20vw] lg:w-[15vw] xl:w-[10vw] font-semibold'>Time</p>
                <p className='w-[50vw] lg:w-[35vw]'>{book?.subject_times}</p>
              </div>
              <div className='flex mb-5'>
                <p className='w-[20vw] lg:w-[15vw] xl:w-[10vw] font-semibold'>Subject</p>
                <p className='w-[50vw] lg:w-[35vw]'>{book?.subjects}</p>
              </div>
              <div className='flex mb-5'>
                <p className='w-[20vw] lg:w-[15vw] xl:w-[10vw] font-semibold'>Description</p>
                <p className='w-[50vw] lg:w-[35vw]'>{book?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BookDetails