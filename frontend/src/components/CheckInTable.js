import React from "react";
import { useEffect, useState } from "react";
import checkInService from "../service/checkInService";
import { Table } from "react-bootstrap";

const CheckInTable = () => {
  const [checkInEntries, setCheckInEntries] = useState([]);

  useEffect(() => {
    checkInService
      .getAll()
      .then((response) => {
        console.log("Check-In entries (all): ", response.data);
        setCheckInEntries(response.data);
      })
      .catch((error) => {
        console.log("Ruh-roh, Shaggy! Something went wrong! :-(", error);
      });
  }, []);

  return (
    <div className={`table-primary mx-auto mt-5 w-75`}>
      <Table>
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Reason For Visit</th>
            <th scope="col">Check In Time</th>
          </tr>
        </thead>
        <tbody>
          {checkInEntries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
              <td>{entry.reasonForVisit}</td>
              <td>{entry.checkInDateTime}</td>
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