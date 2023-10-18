import React from "react";
import { useEffect, useState } from "react";
import checkInService from "../service/checkInService";
import { Button, Table } from "react-bootstrap";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";

const CheckInTable = () => {
  const [checkInEntries, setCheckInEntries] = useState([]);

  useEffect(() => {
    refreshTable();
  }, []);

  const refreshTable = () => {
    checkInService
      .getAll()
      .then((response) => {
        console.log("Check-In entries (all): ", response.data);
        setCheckInEntries(response.data);
      })
      .catch((error) => {
        console.log("Ruh-roh, Shaggy! Something went wrong! :-(", error);
      });
  };

  const deleteEntry = (id) => {
    console.log("In delete entry function");
    checkInService
      .deleteEntryById(id)
      .then((response) => {
        console.log("Entry deleted successfully.", response);
        refreshTable();
      })
      .catch((error) => {
        console.log(
          "Hrm... I don't think that worked out the way you want to. :-( Check out the error logs!",
          error
        );
      });
  };

  return (
    <div className={`table-primary mx-auto mt-5 w-75`}>
      <h4 className={`p-2`}> Waiting in line ({checkInEntries.length}) </h4>
      <Table>
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Reason For Visit</th>
            <th scope="col">Check In Time</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {checkInEntries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
              <td>{entry.reasonForVisit}</td>
              <td>{entry.checkInDateTime}</td>
              <td>
                <IoMdRemoveCircleOutline
                  color="red"
                  size={25}
                  onClick={() => deleteEntry(entry.id)}
                  className="icon mx-1"
                />
                <BiEditAlt color="blue" size={25} className="icon mx-1" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CheckInTable;

/* 

  TODO: Format Date and Time column. 
  TODO: Adjust spacing between columns.
  TODO: Pagination for entries. 15 per page, maybe? 

*/
