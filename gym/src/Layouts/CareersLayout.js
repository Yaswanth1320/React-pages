import { Outlet } from 'react-router-dom'
import React, { useState } from 'react';
import './ExcerciseLayout.css'

export const CareersLayout = () => {
    const [type,searchType] = useState("biceps")
  return (
    <div className='career'>
        <h2>Search your muscle</h2>
        <input type="text" name="text" value={type} onChange={(e)=> searchType(e.target.value)}/>
        <button className='btn'>Search</button>
        <Outlet />
    </div>
  )
}
