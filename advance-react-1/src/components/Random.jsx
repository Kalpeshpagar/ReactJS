import React, { useState } from 'react'
import useGif from './useGif'
import Spinner from './Spinner';


const api_key = import.meta.env.VITE_GIPHY_API_KEY;
console.log(api_key)
const Random = () => {
    const {gif,loading,fetchData} = useGif();

   function clickHandler() {
        fetchData();
    }

  return (
    <div className='w-1/2  bg-green-500 border border-black rounded-lg flex flex-col
     items-center gap-y-5 '>
      <h1 className=' mt-[15px] uppercase underline text-2xl font-bold'>A Random Gif</h1>
          {
              loading ? (<Spinner/>):(<img src={ gif} width='450px' alt="" />)
          }
          <button onClick={clickHandler}
          className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random
