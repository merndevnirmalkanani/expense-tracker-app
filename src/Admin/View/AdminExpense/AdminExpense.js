import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {
  DELETEEXPENSE,
  UPDATEADMINEXPENSE,
} from "../../../Services/Actions/Actions";
import { fetchAllData } from "../../../Config/Config";
const Navbar = React.lazy(() =>
  import("../../../Components/Global/Navbar/Navbar")
);

const AdminExpense = () => {
  const [editShow, setEditShow] = useState(false);
  const [data, setData] = useState();
  const handleClose = () => setEditShow(false);
  const [editableExpense, seteditableExpense] = useState();
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetchAllData();
    setData(response);
  };

  const handleDelete = (key, userKey) => {
    dispatch(DELETEEXPENSE(key, userKey));
  };

  const openEditModel = (key, userKey) => {
    const getData = data?.find((element) => element?.userKey === userKey)
    const getExpense = getData?.expense?.find((expenseFound) => expenseFound?.expenseKey === key)
    seteditableExpense(getExpense);
    setEditShow(true);
  };

  const handleUpdateExpense = (e) => {
    seteditableExpense({ ...editableExpense, [e.target.name]: e.target.value });
  };

  const updateContacts = (e) => {
    dispatch(UPDATEADMINEXPENSE(editableExpense, editableExpense?.expenseKey, editableExpense?.userKey));
    fetchData();
    setEditShow(false);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row py-5">
        <div className="col-12">
          <h3 className="mb-5">See Notes</h3>
        </div>
        <div className="col-12">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Username</th>
                <th scope="col">Label</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="justify-content-center">
            {data?.length === 0 ? (
                  <></>
                ) : (
                  data?.map((element, index) => {
                    return element?.expense?.map((expense, index) => {
                      return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{expense?.title}</td>
                      <td>{expense?.description}</td>
                      <td>{expense?.amount}</td>
                      <td>
                        {expense?.category === "Income" ? (
                          <span className="bg-success text-light p-1 rounded">
                            Income
                          </span>
                        ) : (
                          <span className="bg-danger text-light p-1 rounded">
                            Expense
                          </span>
                        )}
                      </td>
                      <td>{element?.username}</td>
                      <td>{expense?.date}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          onClick={() => openEditModel(expense?.expenseKey, element?.userKey)}
                        >
                          Edit
                        </button>{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(expense?.expenseKey, element?.userKey)}
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
              <Modal.Title>Update Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    onChange={handleUpdateExpense}
                    name="title"
                    value={editableExpense?.title}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    onChange={handleUpdateExpense}
                    name="description"
                    value={editableExpense?.description}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    onChange={handleUpdateExpense}
                    name="amount"
                    value={editableExpense?.amount}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    onChange={handleUpdateExpense}
                    name="date"
                    value={editableExpense?.date}
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

export default AdminExpense;
