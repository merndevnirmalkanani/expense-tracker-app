import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { DELETEUSER, UPDATEUSER } from "../../../Services/Actions/Actions";
const Navbar = React.lazy(() =>
  import("../../../Components/Global/Navbar/Navbar")
);

const AdminUser = () => {
  const [users, setUsers] = useState();
  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);
  const [editableUser, setEditableUser] = useState();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const response = await axios.get(
      "https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
    );

    const data = Object.values(response.data);
    const keys = Object.keys(response.data);

    const getResponse = data.map(
      (element, index) => (element.key = keys[index])
    );
    setUsers(data);
  };

  const handleDelete = (key) => {
    dispatch(DELETEUSER(key));
  };

  const openEditModel = (key) => {
    const response = users.find((note) => note.key === key);
    setEditableUser(response);
    setEditShow(true);
  };

  const handleUpdateUser = (e) => {
    setEditableUser({ ...editableUser, [e.target.name]: e.target.value });
  };

  const updateUser = (e) => {
    dispatch(UPDATEUSER(editableUser, editableUser?.key));
    fetchUser();
    setEditShow(false);
  };

  useEffect(() => {
    fetchUser();
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <h3 className="mb-5">See Active Users</h3>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="justify-content-center">
                {users?.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{user?.fullname}</td>
                      <td>{user?.username}</td>
                      <td>{user?.emailID}</td>
                      <td>{user?.password}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={() => openEditModel(user?.key)}
                        >
                          Edit
                        </button>{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(user?.key)}
                        >
                          Delete
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Modal
              show={editShow}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Note</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Title"
                      onChange={handleUpdateUser}
                      name="fullname"
                      value={editableUser?.fullname}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      onChange={handleUpdateUser}
                      name="emailID"
                      value={editableUser?.emailID}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      onChange={handleUpdateUser}
                      name="username"
                      value={editableUser?.username}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      onChange={handleUpdateUser}
                      name="password"
                      value={editableUser?.password}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setEditShow(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={updateUser}>
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

export default AdminUser;
