import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import BookList from '../../components/BookList/BookList'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <main>
        <Helmet>
          <title>BookLab</title>
        </Helmet>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home