import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { EDITADMINNOTE, EDITNOTES } from "../../../Services/Actions/Actions";
import { DELETENOTE } from "../../../Services/Actions/Actions";
import { fetchAllData } from "../../../Config/Config";
const Navbar = React.lazy(() =>
  import("../../../Components/Global/Navbar/Navbar")
);

const AdminNote = () => {
  const [data, setData] = useState();
  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);
  const [editableNote, setEditableNote] = useState();
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetchAllData();
    setData(response);
  };

  const handleDelete = (key, userKey) => {
    dispatch(DELETENOTE(key, userKey));
  };

  const openEditModel = (key, userKey) => {
    const getData = data?.find((element) => element?.userKey === userKey)
    const getNote = getData?.notes?.find((noteFound) => noteFound?.noteKey === key)
    setEditableNote(getNote);
    setEditShow(true);
  };

  const handleUpdateUser = (e) => {
    setEditableNote({ ...editableNote, [e.target.name]: e.target.value });
  };

  const updateUser = (e) => {
    dispatch(EDITADMINNOTE(editableNote, editableNote?.noteKey, editableNote?.userKey));
    fetchData();
    setEditShow(false);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <h3 className="mb-5">See Notes</h3>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">User</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="justify-content-center">
                {data?.length === 0 ? (
                  <></>
                ) : (
                  data?.map((element, index) => {
                    return element?.notes?.map((note, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{note?.title}</td>
                          <td>{note?.description}</td>
                          <td>{element?.username}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                openEditModel(note?.noteKey, note?.userKey)
                              }
                            >
                              Edit
                            </button>{" "}
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                handleDelete(note?.noteKey, note?.userKey)
                              }
                            >
                              Delete
                            </button>{" "}
                          </td>
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
                <Modal.Title>Add Note</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Title"
                      onChange={handleUpdateUser}
                      name="title"
                      value={editableNote?.title}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      onChange={handleUpdateUser}
                      name="description"
                      value={editableNote?.description}
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

export default AdminNote;
