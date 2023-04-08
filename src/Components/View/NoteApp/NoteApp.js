import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {
  ADDNOTE,
  DELETENOTE,
  EDITNOTES,
} from "../../../Services/Actions/Actions";
import { toast } from "react-toastify";
import axios from "axios";
import { InitialNote, findUser } from "../../../Config/Config";
const Navbar = React.lazy(() => import("../../Global/Navbar/Navbar"));
const Footer = React.lazy(() => import("../../Global/Footer/Footer"));

const Notes = () => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [notes, setNotes] = useState();
  const [editValue, setEditValue] = useState();

  const [note, setNote] = useState(InitialNote);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleAddNote =  (e) => {
    if (note?.title && note?.description) {
      dispatch(ADDNOTE(note, user?.key));
      toast.success("Note Added");
      setNote(InitialNote);
      handleClose();
      fetchNotes();
    } else {
      toast.error("Enter Details");
    }
  };

  const fetchNotes = async () => {
    const getUser = await findUser();
    setUser(getUser?.user)
    const response = await axios.get(
      `https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/users/${user?.key}/notes.json`
    );
    console.log(response?.data);
    const data = Object.values(response?.data);
    const keys = Object.keys(response?.data);

    data.map((element, index) => (element.key = keys[index]));
    setNotes(data);
    findUser();
  };

  const handleEdit = (id) => {
    const response = notes.find((note) => note.key === id);
    setEditValue(response);
    setEditShow(true);
  };

  const handleUpdateInput = (e) => {
    setEditValue({ ...editValue, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const keys = {
      noteKey: editValue?.key,
      userKey: user?.key,
    };
    dispatch(EDITNOTES(editValue, keys));
    fetchNotes();
    setEditShow(false);
  };

  const handleDelete = (key) => {
    dispatch(DELETENOTE(key, user?.key));
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-5">
          <div className="col-12 pb-5 border-bottom">
            <>
              <Button variant="primary" onClick={handleShow}>
                Add Note
              </Button>

              <Modal
                show={show}
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
                        onChange={handleChange}
                        name="title"
                        value={note?.title}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Description"
                        onChange={handleChange}
                        name="description"
                        value={note?.description}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleAddNote}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
          <div className="row py-5">
            {notes?.length > 0
              ? notes?.map((note, index) => {
                  return (
                    <div className="col-12 col-md-4 col-lg-3 mb-3" key={index}>
                      <div className="card ">
                        <div className="card-header">Note {`${index + 1}`}</div>
                        <div className="card-body">
                          <h5 className="card-title">{note?.title}</h5>
                          <p className="card-text">{note?.description}</p>
                          <button
                            className="btn-primary btn me-3"
                            onClick={() => handleEdit(note?.key)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn-danger btn"
                            onClick={() => handleDelete(note?.key)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "No Notes Found"}
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
                      onChange={handleUpdateInput}
                      name="title"
                      value={editValue?.title}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      onChange={handleUpdateInput}
                      name="description"
                      value={editValue?.description}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setEditShow(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                  Update
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notes;
