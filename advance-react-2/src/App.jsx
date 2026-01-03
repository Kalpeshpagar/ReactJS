import React, { useContext, useEffect } from 'react'
import BlogPage from './Pages/BlogPage'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import Home from './Pages/Home'

const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      // iska matlab tag wala pageshow karna he
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchBlogPosts(Number(page),tag)
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchBlogPosts(Number(page),null,category)
    } else {
      fetchBlogPosts(Number(page))
    }
  },[location.pathname, location.search])
  return (
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/blog/:blogId' element={<BlogPage/> } />
      <Route path='/tags/:tag' element={ <TagPage/>} />
      <Route path='/categories/:category' element={<CategoryPage/> } />
    </Routes>
  )
}

export default App
