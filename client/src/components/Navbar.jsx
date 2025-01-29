import React from 'react'

function Navbar() {
    
  return (
   <>
   <div className="p-2 d-flex justify-content-between">
    <h1 className='text-light'>Expense Dashboard</h1>
    <button className='border border-0 rounded-4 p-2 m-3 bg-dark text-light'>Logout</button>
   </div>
   </>
  )
}

export default Navbar