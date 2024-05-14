import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import LogForm from './LogForm'
function Create() {
  return (
    <div>
        <Header/>
    <div className='flex justify-end mr-3 mt-3'>
        <Link to="/"><button className='bg-blue-500 hover:bg-blue-700    px-3 py-2 text-white rounded-md '>To Search Log</button></Link>
    </div>
    <LogForm/>
    </div>
  )
}

export default Create