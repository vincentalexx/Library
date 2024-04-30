import React from 'react'
import LoaderImg from '../../images/loader.gif';
// import LoaderImg from '../../images/load.gif';
import Layout from '../Layout/Layout';

const Loader = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center h-[100vh] w-[100vw]'>
        {/* <img src={LoaderImg} alt="loader" /> */}
        <img src={LoaderImg} alt="loader" className='w-[100px]' />
      </div>
    </Layout>
  )
}

export default Loader