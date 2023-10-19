import httpClient from "../httpCommon";


/* Create */
const createNewEntry = (data) => {
  return httpClient.post('check-in/entries', data);
}

/* Read */
const getAll = () => {
  return httpClient.get("check-in/entries/all");
};

const getEntryById = (id) => {
  return httpClient.get(`check-in/entries/id/${id}`);
};

const getEntryByEmail = (email) => {
  return httpClient.get(`check-in/entries/${email}`);
};

/* Update */

const updateEntry = (data) => {
  return httpClient.put(`check-in/entries`, data)
}

/* Delete */
const deleteEntryById = (id) => {
  return httpClient.delete(`check-in/entries/${id}`);
};


export default { createNewEntry, getAll, getEntryById, getEntryByEmail, updateEntry, deleteEntryById };
