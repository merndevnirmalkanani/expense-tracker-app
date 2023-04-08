import axios from "axios";

export const InitialNote = {
  title: "",
  description: "",
};

export const InitialLogin = {
  username: "",
  password: "",
};

export const InitialSignup = {
  fullname: "",
  emailID: "",
  username: "",
  password: "",
};

export const InitialContact = {
  fullName: "",
  emailID: "",
  contactNo: "",
  message: "",
};

export const InitialExpense = {
  category: "",
  title: "",
  description: "",
  amount: "",
  date: "",
};

export const fetchNotes = async () => {
  try {
    const response = await axios.get(
      "https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json"
    );
    const data = Object.values(response?.data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = async (userDetails) => {
  try {
    const response = await axios.get(
      "https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
    );
    const data = Object.values(response?.data);
    const keys = Object.keys(response?.data);

    data?.map((element, index) => (element.key = keys[index]));
    const getUser = data.find(
      (user) =>
        user.username === userDetails?.username &&
        user.password === userDetails?.password
    );

    if (
      userDetails?.username === "admin" &&
      userDetails?.password === "admin@123"
    ) {
      return {
        adminData: {
          name: "Admin",
          username: "admin",
        },
        isAdmin: true,
        allUser: data,
      };
    } else {
      return {
        user: getUser,
        allUser: data,
        isLogin: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const findUser = async () => {
  const loginToken = localStorage.getItem("loginToken");
  const response = await axios.get(
    "https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
  );
  const data = Object.values(response?.data);
  const keys = Object.keys(response?.data);
  data?.map((element, index) => (element.key = keys[index]));
  // console.log(data);
  const getUser = data?.find((element) => element.key === loginToken);
  // console.log(getUser);
  return {
    user: getUser,
    isUser: true,
  };
};

export const fetchAllData = async () => {
  const response = await axios.get(
    `https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`
  );
  const DATA = Object.values(response?.data);
  Object.keys(response?.data).map(
    (element, index) => (DATA[index].userKey = element)
  );
  DATA?.map((element, index) => {
    if (element?.expense) {
      const expenseData = Object?.values(element?.expense);
      const expenseKey = Object?.keys(element?.expense);
      expenseKey?.map(
        (exp, index) => (
          expenseData[index].expenseKey = exp,
          expenseData[index].userKey = element?.userKey
          )
      );
      element.expense = expenseData;
    }

    if (element?.contacts) {
      const contactsData = Object?.values(element?.contacts);
      const contactsKeys = Object?.keys(element?.contacts);

      contactsKeys?.map(
        (cont, index) => (
          contactsData[index].contactKey = cont, 
          contactsData[index].userKey = element?.userKey
  )
        
      );
      element.contacts = contactsData;
    }

    if (element?.notes) {
      const notesData = Object?.values(element?.notes);
      const notesKeys = Object?.keys(element?.notes);

      notesKeys?.map((note, index) => (notesData[index].noteKey = note,
        notesData[index].userKey = element?.userKey));
      element.notes = notesData;

      return notesData;
    }
  });
  return DATA;
};
