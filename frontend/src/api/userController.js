import httpClient from "../httpCommon";


/* Create */
const createNewUser = (data) => {
    return httpClient.post('users/user', data);
  }
  
  /* Read */
  const getAll = () => {
    return httpClient.get("users/all");
  };
  
  const getUserById = (id) => {
    return httpClient.get(`users/id/${id}`);
  };
  
  const getUserByEmail = (email) => {
    return httpClient.get(`users/email/${email}`);
  };
  
  /* Update */
  
  const updateUserDetails = (data) => {
    return httpClient.put(`users/user`, data)
  }
  
  /* Delete */
  const deleteUserById = (id) => {
    return httpClient.delete(`users/user/${id}`);
  };

  export { createNewUser, getAll, getUserById, getUserByEmail, updateUserDetails, deleteUserById }