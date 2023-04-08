import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let isLogin = localStorage.getItem("adminToken");
    if (!isLogin) {
      navigate("/login");
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default AdminProtected;
