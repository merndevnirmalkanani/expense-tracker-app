import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {
  DELETECONTACT,
  UPDATECONTACT,
} from "../../../Services/Actions/Actions";
import { fetchAllData, findUser } from "../../../Config/Config";
const Navbar = React.lazy(() =>
  import("../../../Components/Global/Navbar/Navbar")
);

const AdminContacts = () => {
  const [data, setData] = useState();
  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);
  const [editableContact, setEditableContact] = useState();
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetchAllData();
    setData(response);
  };

  const handleDelete = (key, userID) => {
    dispatch(DELETECONTACT(key, userID));
  };

  const openEditModel = (key, userKey) => {
    const getData = data?.find((element) => element?.userKey === userKey)
    const getContact = getData?.contacts?.find((contactFound) => contactFound?.contactKey === key)
    setEditableContact(getContact);
    setEditShow(true);
  };

  const handleUpdateContacts = (e) => {
    setEditableContact({ ...editableContact, [e.target.name]: e.target.value });
  };

  const updateContacts = (e) => {
    dispatch(UPDATECONTACT(editableContact, editableContact?.contactKey, editableContact?.userKey));
    console.log(editableContact);
    // fetchContacts();
    setEditShow(false);
  };

  useEffect(() => {
    // fetchContacts();
    fetchData();
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <h3 className="mb-5">See Messages</h3>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Contact No.</th>
                  <th scope="col">Message</th>
                  <th scope="col">Action</th>
                  <th scope="col">User</th>
                </tr>
              </thead>
              <tbody className="justify-content-center">
                {data?.length === 0 ? (
                  <></>
                ) : (
                  data?.map((element, index) => {
                    return element?.contacts?.map((contact, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{contact?.fullName}</td>
                          <td>{contact?.emailID}</td>
                          <td>{contact?.contactNo}</td>
                          <td>{contact?.message}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              onClick={() => openEditModel(contact?.contactKey, contact?.userKey)}
                            >
                              Edit
                            </button>{" "}
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(contact?.contactKey, contact?.userKey)}
                            >
                              Delete
                            </button>{" "}
                          </td>
                          <td>{element?.username}</td>
                        </tr>
                      );
                    });
                  })
                )}
              </tbody>
            </table>
            <Modal
              show={editShow}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Update Contact</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Title"
                      onChange={handleUpdateContacts}
                      name="fullName"
                      value={editableContact?.fullName}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      onChange={handleUpdateContacts}
                      name="emailID"
                      value={editableContact?.emailID}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contact No.</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      onChange={handleUpdateContacts}
                      name="contactNo"
                      value={editableContact?.contactNo}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      onChange={handleUpdateContacts}
                      name="message"
                      value={editableContact?.message}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setEditShow(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={updateContacts}>
                  Update
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminContacts;
