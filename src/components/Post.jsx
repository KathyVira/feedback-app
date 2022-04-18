import React from 'react'
import { Navigate, useNavigate, Route, Routes} from 'react-router-dom'


function Post() {
    const status = 200
    const navigate  = useNavigate()
    const onClick = ()=>{
        console.log('Hello')
        navigate('/about')
    }

    if(status === 404){
       return <Navigate to='notfound' />
    }

  return (
      <>
            <h1>Post </h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path='show'  element={<h1>Hello word</h1>}></Route>
            </Routes>
      </>
  )
}

export default Post