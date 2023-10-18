import httpClient from "../httpCommon";




const getAll = () => {
  return httpClient.get("check-in/entries/all");
};

const deleteEntryById = (id) => {
  return httpClient.delete(`check-in/entries/${id}`);
};

const getEntryById = (id) => {
  return httpClient.get(`check-in/entries/${id}`);
};

// const getEntryByLastName = (lastName) => {
//     return httpClient.get(`check-in/entries/${lastName}`)
// }

const getEntryByEmail = (email) => {
  return httpClient.get(`check-in/entries/${email}`);
};

const createNewEntry = (data) => {
    return httpClient.post('check-in/entries', data);
}

export default { getAll, getEntryById, getEntryByEmail, createNewEntry, deleteEntryById };
