import React, { useEffect, useState } from "react";
import { fetchUsers, InitialLogin } from "../../../Config/Config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImage from "../../../Assets/Images/login.png"

const Login = () => {
  const [userLogin, setUserLogin] = useState(InitialLogin);

  const { username, password } = userLogin;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      const response = await fetchUsers(userLogin);
      if (response.isAdmin) {
        localStorage.setItem("adminToken", JSON.stringify("Admin"));
        toast.success("Succesfull Open Admin Panel");
        if (localStorage.getItem("adminToken")) {
          navigate("/admin/");
        }
      } else if (response.isLogin) {
        localStorage.setItem("loginToken", response.user.key);
        if (localStorage.getItem("loginToken")) {
          navigate("/");
        }
        toast.success("Login Succesfull");
      }
    } else {
      toast.error("Please Enter Valid Details");
    }
  };

  useEffect(() => {
    let isLogin = localStorage.getItem("loginToken");
    if (isLogin) {
      navigate("/");
    }
  });

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container text-center">
        <div className="row align-items-center ">
          {/* <div className="col-12 col-md-6 col-lg-3 mx-auto"> */}
          <div className="col-12 col-md-6 mb-4">
            <img src={loginImage} alt="Login Img" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <div className="formheading">
              <h2 className="text-light mb-5">Welcome Back</h2>
            </div>
            <form
              action="#"
              onSubmit={handleLogin}
              autoComplete="OFF"
              className="mb-3 w-75 mx-auto"
            >
              <div className="formControl">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
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
                <button className="btn btn-primary py-2 px-5">Login</button>
              </div>
            </form>
            <p className="text-light">
              Haven't Account?{" "}
              <Link
                to={"/signup"}
                className="text-primary text-decoration-none"
              >
                Sign Up
              </Link>
            </p>
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
