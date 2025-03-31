import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1 className='bg-green-500 text-black p-4'>Hello World !!!</h1>
      
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="flex items-center md:items-start">
        <span className="text-2xl font-medium">Clouds & Sunshine</span>
      </div>
    </div>
    </>
  )
}

export default App
