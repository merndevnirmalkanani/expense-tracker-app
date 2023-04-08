import React from 'react'
import "./Features.scss"

const Features = () => {
  return (
    <div className='container'>
      <div className="row my-5">
        <div className="col-12 mt-5">
            <div className="header-features text-center">
                <span>Special Features</span>
                <h3 className='fs-1'>Of Expense Manage</h3>
                <p>Organizing your expenses allow you to have a better control over your money.</p>
            </div>
            <div className="row py-5">
                <div className="col-12 col-md-4 mb-5 ps-5 ps-md-0">
                    <div className="card-container">
                        <div className="card-demo">
                        <i className="fa-solid fa-people-roof mb-3" style={{fontSize:"54px"}}></i>
                            <h4 className='mb-3'>User Management System</h4>
                            <p>Software to manage the expense claim, authorization, audit and repayment can be obtained from organization that provide a licensed software</p>
                            <div className="layers">
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-5 ps-5 ps-md-0">
                  <div className="card-container">
                        <div className="card-demo">
                        <i className="fa-solid fa-chart-pie mb-3" style={{fontSize:"54px"}}></i>
                            <h4 className='mb-3'>Expense Management</h4>
                            <p>Expense Tracking refers to the systems deployes by a business to process, pay and audit employeed-initiated expenses. Software To manage the expense claim</p>
                            <div className="layers">
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-5 ps-5 ps-md-0">
                  <div className="card-container">
                        <div className="card-demo">
                        <i className="fa-solid fa-fingerprint mb-3" style={{fontSize:"54px"}}></i>
                            <h4 className='mb-3'>Login Management</h4>
                            <p>Typically, A manual process will involve an employee completing a paper, Spreadsheet or Graphical User Interface-based report that they then forward</p>
                            <div className="layers">
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                                <div className="layer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
