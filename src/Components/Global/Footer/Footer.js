import React, { useEffect, useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    let isAdmin = localStorage.getItem("adminToken");
    let isUser = localStorage.getItem("loginToken");
    if (isAdmin) {
      setIsAdmin(true);
      setIsUser(false);
    } else if (isUser) {
      setIsUser(true);
      setIsAdmin(false);
    } else {
      setIsUser(false);
      setIsAdmin(false);
    }
  });

  return (
    <>
      {!isAdmin && !isUser ? "" : ""}
      {isUser === true ? (
        
          <footer className="bg-dark py-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 pe-5">
                  <AttachMoneyIcon className="fs-1 text-light mb-3" />
                  <p className="text-light lh-basis">
                    Expense Tracking is important in creating a budget for your
                    small business. Keeping a daily record of your expenses by
                    tracking receipts, invoices, and other outgoing expenses
                    improves the financial health of your budget. Tracking
                    expenses can help you stay on top of your cash flow and
                    prepare you for tax season.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <h3 className="footer-menu-one text-light fw-normal mb-3">
                    Modules
                  </h3>
                  <ul className="p-0 text-light list-unstyled">
                    <li>
                      <Link to={"/"} className="footer-menu">
                        Admin Panel
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="footer-menu">
                        Client Side
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <h3 className="footer-menu-two text-light fw-normal mb-3">
                    Quick Reach
                  </h3>
                  <ul className="p-0 text-light list-unstyled">
                    <li>
                      <Link to={"/about-us"} className="footer-menu">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to={"/expense-manage"} className="footer-menu">
                        Expense Tracker
                      </Link>
                    </li>
                    <li>
                      <Link to={"/notes-app"} className="footer-menu">
                        Notes App
                      </Link>
                    </li>
                    <li>
                      <Link to={"/contact-us"} className="footer-menu">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <h3 className="footer-menu-three text-light fw-normal mb-3">
                    Location
                  </h3>
                  <ul className="p-0 text-light list-unstyled">
                    <li>
                      <address>
                        2005, Sarthana Jakatnaka, Surat - 395006
                      </address>
                    </li>
                    <li>
                      <a href="callto:919625408423" className="footer-menu">
                        +91 96254 08423
                      </a>{" "}
                      /{" "}
                      <a href="callto:918651290167" className="footer-menu">
                        +91 86512 90167
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;
