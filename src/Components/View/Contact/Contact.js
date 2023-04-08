import React, { useEffect, useState } from "react";
import ContactUS from "../../../Assets/Images/contact-us.jpg";
import { InitialContact, findUser } from "../../../Config/Config";
import { toast } from "react-toastify";
import { SENDCONTACT } from "../../../Services/Actions/Actions";
import { useDispatch } from "react-redux";
const Navbar = React.lazy(() => import("../../Global/Navbar/Navbar"));
const Footer = React.lazy(() => import("../../Global/Footer/Footer"));

const Contact = () => {
  const [contact, setContact] = useState(InitialContact);
  const [ user,setUser ] = useState()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const getUser = async () => {
    const response = await findUser()
    setUser(response?.user)
  }

  useEffect(() => {
    getUser()
  })

  const handleSend = (e) => {
    e.preventDefault();
    const validation = contact.fullName && contact.emailID && contact.contactNo && contact.message
    if (!validation) {
      toast.error("Please Fill Below Details");
    } else {
      toast.success("Our Team will be contact you soon");
      dispatch(SENDCONTACT(contact, user?.key));
      setContact(InitialContact);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-lg-6 mb-5">
            <img src={ContactUS} alt="" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="container text-center ">
              <h2 className="mb-4">Contact Us</h2>
              <div className="row ">
                <div className="col-12 col-md-6 col-lg-10 mx-auto">
                  <form action="#" autoComplete="OFF" className="mb-3">
                    <div className="formControl">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingfullName"
                          placeholder="Full Name"
                          onChange={handleChange}
                          name="fullName"
                          value={contact.fullName}
                        />
                        <label htmlFor="floatingInput">Full Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingEmail"
                          placeholder="Email ID"
                          name="emailID"
                          onChange={handleChange}
                          value={contact.emailID}
                        />
                        <label htmlFor="floatingPassword">Email ID</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingContactNo"
                          placeholder="Contact No."
                          name="contactNo"
                          onChange={handleChange}
                          value={contact.contactNo}
                        />
                        <label htmlFor="floatingContact">Contact No.</label>
                      </div>
                      <div class="form-floating mb-3">
                        <textarea
                          class="form-control"
                          placeholder="Leave a Message here"
                          id="floatingTextarea2"
                          style={{ height: "100px" }}
                          name="message"
                          onChange={handleChange}
                          value={contact.message}
                        ></textarea>
                        <label for="floatingTextarea2">Message</label>
                      </div>
                      <div></div>
                      <div className="form-btn"></div>
                      <button
                        className="btn btn-primary py-2 px-5"
                        onClick={handleSend}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
