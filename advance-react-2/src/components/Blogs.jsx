import React, { useContext } from 'react'
import App from '../App'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


const Blogs = () => {
    const { loading, posts } = useContext(AppContext);
    console.log(posts)
  return (
    <div className='w-11/12 max-w-[650px] py-3 flex flex-col gap-y-6 mt-[70px] mb-[75px] justify-center items-center '>
          {
              loading ? (<Spinner />) : (
                  posts.length === 0 ? (
                      <div>
                          <h1> No Data Found </h1>
                        </div>
                  ) :
                      (posts.map((post) => {
                          <BlogDetails key={post.id} post = {post}/>
                      })) 
              )
      }
    </div>
  )
}

export default Blogs
