import React from 'react'
import expenseImage from "../../../Assets/Images/expense-manage.png"

const Hero = () => {
  return (
    <div className='container-fluid'>
      <div className="row align-items-center mt-5">
        <div className="col-12 col-md-4">
            <h3 className='fs-1 ms-5 lh-base'>Organizing Your Expenses <br className='d-none d-md-block'/> Allow You To Have a Better Control <br className='d-none d-md-block'/> Over Your Money</h3>
        </div>
        <div className="col-12 col-md-8 text-center">
            <img src={expenseImage} alt="Expence Manage Hero" className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default Hero
