import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Spinner from './Spinner';
import useGif from './useGif'


const Tag = () => {
    const [tag, setTag] = useState('');
    const {gif,loading,fetchData} = useGif(tag);
    function clickHandler() {
        fetchData(tag);
    }
  return (
    <div className='w-1/2  bg-blue-500 border border-black rounded-lg flex flex-col
     items-center gap-y-5 '>
      <h1 className=' mt-[15px] uppercase underline text-2xl font-bold'>{tag}</h1>
          {
              loading ? (<Spinner/>):(<img src={ gif} width='450px' alt="" />)
          }
          <input type="text"
              className='w-10/12 text-lg text-center py-2 rounded-lg mb-[3px] bg-white outline-none'
              onChange={(event) => setTag(event.target.value)}
              value={tag} />
          
          <button onClick={clickHandler}
          className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag
