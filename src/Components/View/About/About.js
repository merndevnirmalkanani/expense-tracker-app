import React from "react";
import aboutUsDes from "../../../Assets/Images/about-us-description.jpg";
import profileThyona from "../../../Assets/Images/thyona-profile.jpg";
import profileBansari from "../../../Assets/Images/bansariProfile.jpg";
const Navbar = React.lazy(() => import("../../Global/Navbar/Navbar"))
const Footer = React.lazy(() => import("../../Global/Footer/Footer"))

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0">
          <div className="about-header text-center d-flex justify-content-center align-items-center">
            <h3 className="m-0">About Us</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-5 py-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={aboutUsDes}
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Hello, Welcome To Expense Management System
            </h1>
            <p className="mb-4">
              Daily Expense refers to the systems deployed by a process, pay and
              audit employee initiated expenses.
            </p>
            <p className="mb-4">
              These costs include, but are not limited to. Expenses incurred for
              travel and enterntainment. Daily Expenses includes the polices and
              procedures that govern such spending. As well as the technologies
              and services utilized to process and analyzed the data associated
              with it.
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Skilled Instructors
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Online Classes
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  International Certificate
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Skilled Instructors
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Online Classes
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  International Certificate
                </p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="/">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="team-header text-center mb-5">
          <span>OUR MEMBERS</span>
          <h3>The People Behind</h3>
          <p>
            We're an expert designer and developer in MERN stack technology.{" "}
            <br /> We hope this project can win your heart.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="profile-card">
              <div className="profile-img">
                <img src={profileThyona} alt="" />
              </div>
              <div className="profile-content">
                <h2 className="title">
                  Thyona Busa <span>Full Stack Developer</span>
                </h2>
                <ul className="social-link">
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="profile-card">
              <div className="profile-img">
                <img src={profileBansari} alt="" />
              </div>
              <div className="profile-content">
                <h2 className="title">
                  Bansari Dhanani <span>Full Stack Developer</span>
                </h2>
                <ul className="social-link">
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
