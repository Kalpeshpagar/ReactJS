import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = import.meta.env.VITE_GIPHY_API_KEY;
console.log(api_key)
const url = `https://api.giphy.com/v1/gifs/random?api_key=KBhgYmnh4IzAZZBWRzjSMh2SzskBKZ0I`
const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
      async function fetchData(tag) {
        try {
            setLoading(true);
            const response = await axios.get(tag ? `${url}&tag=${tag}`: url);
            // const response = await axios(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
            const data = response.data;
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
            console.log(response);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching the gif", error);
        }
    }

    useEffect(() => {
        fetchData();
},[])
  return { gif, loading, fetchData}
}

export default useGif
