import React from "react";
import Avatar from "@mui/material/Avatar";
import adminImage from "../../../Assets/Images/thyona-profile.jpg";
import "./Dashboard.css";
import PaymentIcon from "@mui/icons-material/Payment";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
const Navbar = React.lazy(() => import("../../../Components/Global/Navbar/Navbar"))

const Dashboard = () => {
  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="row py-5">
          <div className="col-12 text-center mb-5">
            <Avatar
              alt="Remy Sharp"
              src={adminImage}
              sx={{ width: 56, height: 56 }}
              className="mx-auto mb-3"
            />
            <h5 className="text-primary">Welcome, Admin</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <section className="dashboard-card">
              <div className="image-circle purple">
                {/* <i className="fas fa-headphones-alt"></i> */}
                <PaymentIcon />
              </div>
              <h3>Expense Management</h3>
              <div className="line"></div>
              <p>
                Here, You can manage your daily expenses and incomes via
                dashboard.
              </p>
            </section>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <section className="dashboard-card">
              <div className="image-circle red">
                <DescriptionIcon />
              </div>
              <h3>Notes Management</h3>
              <div className="line red"></div>
              <p>
                Here, You can Edit, Update and Delete notes which add users in
                their websites.
              </p>
            </section>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <section className="dashboard-card">
              <div className="image-circle green">
                <PeopleAltIcon />
              </div>
              <h3>User Management</h3>
              <div className="line green"></div>
              <p>
                Here, You can manage users like if you not like any user then
                you can delete their data.
              </p>
            </section>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <section className="dashboard-card">
              <div className="image-circle blue">
                <ContactSupportIcon />
              </div>
              <h3>Contacts Management</h3>
              <div className="line blue"></div>
              <p>
                Here, You see all deatils which any user feel contact form for
                their quarry or any other purpose.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
