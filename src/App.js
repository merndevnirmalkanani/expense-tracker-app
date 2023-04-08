import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/Protected/ProtectedRoute";
import AdminProtected from "./Components/Protected/AdminProtected";
// Auth
const Signup = React.lazy(() => import("./Components/Auth/Signup/Signup"));
const Login = React.lazy(() => import("./Components/Auth/Login/Login"));
// Global
const Navbar = React.lazy(() => import("./Components/Global/Navbar/Navbar"));
const Footer = React.lazy(() => import("./Components/Global/Footer/Footer"));
const Loader = React.lazy(() => import("./Components/Global/Loader/Loader"));
// UserView
const Main = React.lazy(() => import("./Components/View/Main/Main"));
const About = React.lazy(() => import("./Components/View/About/About"));
const Contact = React.lazy(() => import("./Components/View/Contact/Contact"));
const Notes = React.lazy(() => import("./Components/View/NoteApp/NoteApp"));
const ExpenseManage = React.lazy(() =>
  import("./Components/View/ExpenseManage/ExpenseManage")
);
// AdminView
const Dashboard = React.lazy(() => import("./Admin/View/Dashboard/Dashboard"));
const AdminExpense = React.lazy(() =>
  import("./Admin/View/AdminExpense/AdminExpense")
);
const AdminNote = React.lazy(() => import("./Admin/View/AdminNote/AdminNote"));
const AdminUsers = React.lazy(() => import("./Admin/View/AdminUser/AdminUser"));
const AdminContacts = React.lazy(() =>
  import("./Admin/View/AdminContacts/AdminContacts")
);

const App = () => {

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<ProtectedRoute Components={Main} />} exact />
          <Route
            path="/about-us"
            element={<ProtectedRoute Components={About} exact />}
          />
          <Route
            path="/expense-manage"
            element={<ProtectedRoute Components={ExpenseManage} exact />}
          />
          <Route
            path="/notes-app"
            element={<ProtectedRoute Components={Notes} exact />}
          />
          <Route
            path="/contact-us"
            element={<ProtectedRoute Components={Contact} exact />}
          />
          <Route
            path="/admin"
            element={<AdminProtected Component={Dashboard} />}
          />
          <Route
            path="/admin/users"
            element={<AdminProtected Component={AdminUsers} />}
          />
          <Route
            path="/admin/expense"
            element={<AdminProtected Component={AdminExpense} />}
          />
          <Route
            path="/admin/notes"
            element={<AdminProtected Component={AdminNote} />}
          />
          <Route
            path="/admin/contact-messages"
            element={<AdminProtected Component={AdminContacts} />}
          />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
