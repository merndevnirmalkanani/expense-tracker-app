import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  DELETEEXPENSE,
  UPDATEEXPENSE,
} from "../../../../Services/Actions/Actions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { findUser } from "../../../../Config/Config";

const ExpenseList = () => {
  const [allExpense, setAllExpense] = useState();
  const [editExpense, setEditExpense] = useState();
  const [ user, setUser ] = useState()
  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);
  const dispatch = useDispatch();

  const fetchExpense = async () => {
    const userGet = await findUser();
    setUser(userGet)
    const response = await axios.get(
      `https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/users/${user?.user?.key}/expense.json`
    );
    const data = Object.values(response?.data);
    const keys = Object.keys(response?.data);
    data.map((element, index) => (element.key = keys[index]));
    setAllExpense(data);
  };

  const handleDelete = (key) => {
    dispatch(DELETEEXPENSE(key, user?.user?.key));
  };

  useEffect(() => {
    fetchExpense();
  });

  const handleEdit = (key) => {
    const response = allExpense?.find((note) => note.key === key);
    setEditExpense(response);
    setEditShow(true);
  };

  const handleUpdateInput = (e) => {
    setEditExpense({ ...editExpense, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const keys = {
      expenseKey : editExpense?.key,
      userKey : user?.user?.key
    }
    dispatch(UPDATEEXPENSE(editExpense,keys));
    setEditShow(false);
    fetchExpense();
  };

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-12 text-center">
          <h3 className="mb-4 pb-3 border-bottom">
            Income & Expense ShortList
          </h3>
        </div>
        <div className="col-12">
          <table className="table table-striped text-center ">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allExpense?.length === 0 ? (
                <p>No Details Found</p>
              ) : (
                allExpense?.map((expense, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{expense?.title}</td>
                      <td>{expense?.description}</td>
                      <td>
                        {expense?.category === "Income" ? (
                          <span className="bg-success p-1 rounded text-light">
                            Income
                          </span>
                        ) : (
                          <span className="bg-danger p-1 rounded text-light">
                            Expense
                          </span>
                        )}
                      </td>
                      <td>{expense?.amount}</td>
                      <td>
                        <button
                          className="btn btn-primary me-3"
                          onClick={() => handleEdit(expense?.key)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger me-3"
                          onClick={() => handleDelete(expense?.key)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
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
                    onChange={handleUpdateInput}
                    name="title"
                    value={editExpense?.title}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    onChange={handleUpdateInput}
                    name="description"
                    value={editExpense?.description}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contact No.</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    onChange={handleUpdateInput}
                    name="amount"
                    value={editExpense?.amount}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    onChange={handleUpdateInput}
                    name="date"
                    value={editExpense?.date}
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
  );
};

export default ExpenseList;
