import React from 'react'
import './MainDash.css'
import Cards from '../cards/Cards'
import Table from '../table/Table'



const MainDash = () => {
  return (
    <div className='MainDash'>
      <h1>Dashboard</h1>
      <Cards/>
      <Table/>

    </div>
  )
}

export default MainDash