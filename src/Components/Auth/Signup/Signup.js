import React, { useState } from "react";
import { InitialSignup } from "../../../Config/Config";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SIGNUPUSER } from "../../../Services/Actions/Actions";
import { toast } from "react-toastify";
import loginImage from "../../../Assets/Images/login.png";

const Signup = () => {
  const [userSignup, setUserSignup] = useState(InitialSignup);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fullname, emailID, username, password } = userSignup;

  const handleChange = (e) => {
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (fullname && emailID && username && password) {
      dispatch(SIGNUPUSER(userSignup));
      toast.success("Registered Successfull");
      navigate("/login");
    } else {
      toast.error("Enter Valid Details");
    }
  };

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container text-center">
        <div className="row align-items-center py-3">
          {/* <div className="col-12 col-md-6 col-lg-3 mx-auto"> */}
          <div className="col-12 col-md-6 mb-4">
            <img src={loginImage} alt="Login Img" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <div className="formheading">
              <h2 className="text-light mb-5">Create New Account</h2>
            </div>
            <form
            action="#"
            onSubmit={handleSignup}
            autoComplete="OFF"
            className="mb-3 w-75 mx-auto"
          >
            <div className="formControl">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  name="fullname"
                  value={fullname}
                />
                <label htmlFor="floatingInput">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  name="emailID"
                  value={emailID}
                />
                <label htmlFor="floatingInput">Email ID</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingUsername"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  name="username"
                  value={username}
                />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-btn"></div>
              <button className="btn btn-primary py-2 px-5">Signup</button>
            </div>
          </form>
          <p className="text-light">
            Already have Account?{" "}
            <Link to={"/login"} className="text-primary text-decoration-none">
              Login
            </Link>
          </p>
          </div>
          
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
