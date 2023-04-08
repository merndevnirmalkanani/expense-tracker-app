import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { fetchExpense, findUser } from "../../../../Config/Config";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenseData }) => {
  const [allExpense, setAllExpense] = useState([]);
  const [income, setIncome] = useState();
  const [user, setUser] = useState();
  const [expense, setExpense] = useState([]);

  const fetchExpense = async () => {
    const getUser = await findUser();
    setUser(getUser);
    const response = await axios.get(`https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/users/${user?.user?.key}/expense.json`)
    const data = Object.values(response?.data);
    const keys = Object.keys(response?.data);

    data?.map(
      (element, index) => (element.key = keys[index])
    );
    setAllExpense(data);
    var totalIncome = 0;
    var totalExpense = 0;
    allExpense?.map((element) => {
      if (element?.category === "Income") {
        totalIncome += Number(element?.amount)
        // setIncome(totalIncome)
      } else if (element?.category === "Expense") {
        totalExpense += Number(element?.amount)
      }
      setIncome(totalIncome)
      setExpense(totalExpense)
    })
  }

  useEffect(() => {
    fetchExpense()
  })

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount",
        data: [income ? income : 0, expense ? expense : 0],
        backgroundColor: ["black", "red"],
        borderColor: ["black", "red"],
      },
    ],
  };

  const options = {};

  return (
    <div style={{ width: "50%" }} className="d-flex justify-content-center">
      <Doughnut data={data ? data : ""} options={options} />
    </div>
  );
};

export default ExpenseChart;
