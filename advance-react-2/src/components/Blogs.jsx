import React, { useContext } from 'react'
import App from '../App'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';


const Blogs = () => {
    const { loading, posts } = useContext(AppContext);
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
                          return (
                              <div key={post.id} className="blog">
                                  <p className='font-bold mb-[6px]'>{ post.title}</p>
                                  <p className='text-sm text-gray-500'>
                                      By <span className='italic'>{post.author }</span> on <span className='underline font-bold text-black-500'>{post.category }</span>
                                  </p>
                                  <p className='text-sm text-gray-500 mt-[3px]'>Posted on {post.date }</p>
                                  <p className='text-sm mt-[12px] mb-[6px]'>{ post.content}</p>
                                  <div className='flex gap-x-3'>
                                      {post.tags.map((tag, index) => {
                                          return (
                                              <span key={index} className="text-blue-700 underline font-bold text-[12px] cursor-pointer"> {`#${tag}`} </span>
                                          )
                                      })}
                                  </div>
                              </div>
                          )
                      })) 
              )
      }
    </div>
  )
}

export default Blogs
