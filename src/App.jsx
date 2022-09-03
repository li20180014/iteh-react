import React from 'react'
import './index.css'
import Header from './common/header/Header'
import Footer from './common/footer/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './components/blog/BlogPost'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/blog" element={<Blog/>}/>
      <Route path ="/blog-post" element={<BlogPost/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
