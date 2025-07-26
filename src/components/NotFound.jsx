import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound () {
  const navigate = useNavigate()
  return (
    <div class='notfound container mt-20 pt-10 top-0 left-0 right-0 bottom-0 mx-auto'>
      <h1>PAGE NOT FOUND</h1>
      <p class='mt-5'>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <a class='back uppercase rounded-md inline-block my-7 mx-0 px-2 py-2 bg-blue-title text-white' role='button' onClick={() => navigate('/')}>
        Go back
      </a>
    </div>
  )
}

export default NotFound
