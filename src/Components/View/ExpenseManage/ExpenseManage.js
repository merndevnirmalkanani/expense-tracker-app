import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import { InitialExpense, findUser } from "../../../Config/Config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ADDEXPENSE } from "../../../Services/Actions/Actions";
import ExpenseChart from "./ExpenseChart/ExpenseChart";
import moment from "moment";
import axios from "axios";
import ExpenseList from "./ExpenseList/ExpenseList";
const Navbar = React.lazy(() => import("../../Global/Navbar/Navbar"));
const Footer = React.lazy(() => import("../../Global/Footer/Footer"));

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="₹"
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const ExpenseManage = () => {
  const [expense, setExpense] = useState(InitialExpense);
  const [user, setUser] = useState();
  const [allExpense, setAllExpense] = useState();
  const dispatch = useDispatch();

  const handleChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const fetchExpense = async () => {
    const getUser = await findUser();
    setUser(getUser?.user);
    const response = await axios.get(
      `https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/users/${user?.key}/expense.json`
    );
    const data = Object.values(response?.data);
    const keys = Object.keys(response?.data);

    data.map((element, index) => (element.key = keys[index]));
    setAllExpense(data);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const validation =
      expense.title &&
      expense.description &&
      expense.amount &&
      expense.category;
    if (!validation) {
      toast.error("Please Enter Valid Details");
    } else {
      toast.success("Add Succesfull");
      const formatedDate = moment(expense?.date, "YYYY-MM-DD").format(
        "DD-MM-YYYY"
      );
      dispatch(ADDEXPENSE({ ...expense, date: formatedDate }, user?.key));
      setExpense(InitialExpense);
      fetchExpense();
    }
    fetchExpense();
  };

  useEffect(() => {
    fetchExpense();
  });

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row py-5 align-items-center">
          <div className="col-12 col-md-6 order-2 order-md-1 px-5 mb-5">
            <form action="#" autoComplete="OFF" className="mb-3">
              <div className="formControl mb-3">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={expense?.category}
                    label="Category"
                    name="category"
                    onChange={handleChangeExpense}
                  >
                    <MenuItem value={"Expense"}>Expense</MenuItem>
                    <MenuItem value={"Income"}>Income</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="formControl mb-3">
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  name="title"
                  onChange={handleChangeExpense}
                  value={expense?.title}
                />
              </div>
              <div className="formControl mb-3">
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  name="description"
                  onChange={handleChangeExpense}
                  value={expense?.description}
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="formControl mb-3">
                    <TextField
                      label="Amount"
                      value={expense?.amount}
                      onChange={handleChangeExpense}
                      name="amount"
                      InputProps={{
                        inputComponent: NumericFormatCustom,
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="formControl">
                    <input
                      type="date"
                      name="date"
                      value={expense?.date}
                      onChange={handleChangeExpense}
                      style={{ padding: "12px 18px", width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="formControl text-center">
                <button
                  className="btn btn-primary py-2 px-5"
                  onClick={handleAddExpense}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center mb-5">
            <ExpenseChart expenseData={allExpense} />
          </div>
        </div>
        <hr />
        <ExpenseList />
      </div>
      <Footer />
    </>
  );
};

export default ExpenseManage;
