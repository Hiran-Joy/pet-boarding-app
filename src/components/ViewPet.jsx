import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewPet = () => {
  const [petData, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view_pet")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered align-middle text-center">
                <thead className="table-primary">
                  <tr>
                    <th>Booking ID</th>
                    <th>Pet Name</th>
                    <th>Pet Type</th>
                    <th>Breed</th>
                    <th>Age</th>
                    <th>Weight (kg)</th>
                    <th>Vaccination Status</th>
                    <th>Owner Name</th>
                    <th>Owner Phone</th>
                    <th>Owner Email</th>
                    <th>Check-in Date</th>
                    <th>Check-out Date</th>
                    <th>Kennel Number</th>
                  </tr>
                </thead>

                <tbody>
                  {petData.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.bookingId}</td>
                        <td>{value.petName}</td>
                        <td>{value.petType}</td>
                        <td>{value.breed}</td>
                        <td>{value.age}</td>
                        <td>{value.weight}</td>
                        <td>{value.vaccinationStatus}</td>
                        <td>{value.ownerName}</td>
                        <td>{value.ownerPhone}</td>
                        <td>{value.ownerEmail}</td>
                        <td>{value.checkInDate}</td>
                        <td>{value.checkOutDate}</td>
                        <td>{value.kennelNumber}</td>
                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPet;