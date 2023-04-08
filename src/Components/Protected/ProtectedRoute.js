import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Components }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let isLogin = localStorage.getItem("loginToken");
    if (!isLogin) {
      navigate("/login");
    }
  });

  return (
    <>
      <Components />
    </>
  );
};

export default ProtectedRoute;
