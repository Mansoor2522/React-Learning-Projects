import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]= useState([])
    useEffect(() => {
      fetch('https:/api.github.com/users/Mansoor2522')
      .then(response =>response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
    }, [])
    
  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={200}/> 
    </div>
  )
}

export default Github
