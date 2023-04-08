import {
  ADD_EXPENSE,
  ADD_NOTE,
  DELETE_CONTACT,
  DELETE_EXPENSE,
  DELETE_NOTE,
  DELETE_USER,
  EDIT_NOTE,
  SEND_CONTACT,
  SIGNUP_USER,
  UPDATE_CONTACT,
  UPDATE_EXPENSE,
  UPDATE_USER,
} from "./ConstantActions";

export const ADDNOTE = (item, id) => {
  return {
    type: ADD_NOTE,
    data: item,
    isHttpsAction: true,
    method: "POST",
    url: `/users/${id}/notes.json`,
  };
};

export const SIGNUPUSER = (item) => {
  return {
    type: SIGNUP_USER,
    data: item,
    isHttpsAction: true,
    method: "POST",
    url: "/users.json",
  };
};

export const DELETENOTE = (key, userKey) => {
  return {
    type: DELETE_NOTE,
    data: key,
    isHttpsAction: true,
    method: "DELETE",
    url: `/users/${userKey}/notes/${key}.json`,
  };
};

export const EDITNOTES = (UPDATEDATA, KEYS) => {
  return {
    type: EDIT_NOTE,
    data: UPDATEDATA,
    isHttpsAction: true,
    method: "PUT",
    url: `/users/${KEYS?.userKey}/notes/${KEYS?.noteKey}.json`,
  };
};

export const EDITADMINNOTE = (UPDATEDATA, KEYS, USERKEY) => {
  return {
    type: EDIT_NOTE,
    data: UPDATEDATA,
    isHttpsAction: true,
    method: "PUT",
    url: `/users/${USERKEY}/notes/${KEYS}.json`,
  };
};

export const SENDCONTACT = (item, id) => {
  console.log(id);
  return {
    type: SEND_CONTACT,
    data: item,
    isHttpsAction: true,
    method: "POST",
    url: `/users/${id}/contacts.json`,
  };
};

export const UPDATECONTACT = (item, contactkey, userkey) => {
  return {
    type: UPDATE_CONTACT,
    data: item,
    isHttpsAction: true,
    method: "PUT",
    url: `/users/${userkey}/contacts/${contactkey}.json`,
  };
};

export const DELETECONTACT = (contactkey, userkey) => {
  return {
    type: DELETE_CONTACT,
    data: contactkey,
    isHttpsAction: true,
    method: "DELETE",
    url: `/users/${userkey}/contacts/${contactkey}.json`,
  };
};

export const UPDATEUSER = (item, id) => {
  return {
    type: UPDATE_USER,
    data: item,
    isHttpsAction: true,
    method: "PUT",
    url: `/users/${id}.json`,
  };
};

export const DELETEUSER = (key) => {
  return {
    type: DELETE_USER,
    data: key,
    isHttpsAction: true,
    method: "DELETE",
    url: `/users/${key}.json`,
  };
};

export const ADDEXPENSE = (item, id) => {
  return {
    type: ADD_EXPENSE,
    data: item,
    isHttpsAction: true,
    method: "POST",
    url: `/users/${id}/expense.json`,
  };
};

export const DELETEEXPENSE = (key, userId) => {
  return {
    type: DELETE_EXPENSE,
    data: key,
    isHttpsAction: true,
    method: "DELETE",
    url: `/users/${userId}/expense/${key}.json`,
  };
};

export const UPDATEEXPENSE = (item, KEYS) => {
  return {
    type: UPDATE_EXPENSE,
    data: item,
    isHttpsAction: true,
    method: "PUT",
    url: `/users/${KEYS?.userKey}/expense/${KEYS?.expenseKey}.json`,
  };
};

export const UPDATEADMINEXPENSE = (item, expenseKey, userKey) => {
  return {
    type: UPDATE_EXPENSE,
    data: item,
    isHttpsAction: true,
    method: "PUT",
    url: `/users/${userKey}/expense/${expenseKey}.json`,
  };
};
