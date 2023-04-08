import React from "react";
// User Components
const Main = React.lazy(() => import("../Components/View/Main/Main"));
const About = React.lazy(() => "../Components/View/About/About");
const ExpenseManage = React.lazy(
  () => "../Components/View/ExpenseManage/ExpenseManage"
);
const Notes = React.lazy(() => "../Components/View/NoteApp/NoteApp");
const Contacts = React.lazy(() => "../Components/View/Contact/Contact");

// Admin Components
const Dashboard = React.lazy(() => import("../Admin/View/Dashboard/Dashboard"));
const AdminExpense = React.lazy(() =>
  import("../Admin/View/AdminExpense/AdminExpense")
);
const AdminNote = React.lazy(() => import("../Admin/View/AdminNote/AdminNote"));
const AdminUser = React.lazy(() => import("../Admin/View/AdminUser/AdminUser"));
const AdminContacts = React.lazy(() =>
  import("../Admin/View/AdminContacts/AdminContacts")
);

export const AdminRoute = [
  {
    name: "Dashboard",
    path: "/admin/",
    component: Dashboard,
  },
  {
    name: "Expense",
    path: "/admin/expense",
    component: AdminExpense,
  },
  {
    name: "Notes",
    path: "/admin/notes",
    component: AdminNote,
  },
  {
    name: "Users",
    path: "/admin/users",
    component: AdminUser,
  },
  {
    name: "Contacts",
    path: "/admin/contact-messages",
    component: AdminContacts,
  },
];

export const ClientRoutes = [
  {
    name: "Home",
    path: "/",
    component: Main,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: About,
  },
  {
    name: "Expense Manage",
    path: "/expense-manage",
    component: ExpenseManage,
  },
  {
    name: "Notes",
    path: "/notes-app",
    component: Notes,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: Contacts,
  },
];
