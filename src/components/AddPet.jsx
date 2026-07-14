import axios from "axios";
import React, { useState } from "react";

const AddPet = () => {
  const [input, changeInput] = useState({
    bookingId: "",
    petName: "",
    petType: "",
    breed: "",
    age: "",
    weight: "",
    vaccinationStatus: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    checkInDate: "",
    checkOutDate: "",
    kennelNumber: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value });
  };

  const readValues = () => {
    axios
      .post("http://localhost:3000/add_pet", input)
      .then(() => {
        setMessage("Pet booking added successfully");
        setError("");

        changeInput({
          bookingId: "",
          petName: "",
          petType: "",
          breed: "",
          age: "",
          weight: "",
          vaccinationStatus: "",
          ownerName: "",
          ownerPhone: "",
          ownerEmail: "",
          checkInDate: "",
          checkOutDate: "",
          kennelNumber: "",
        });
      })
      .catch((err) => {
        setMessage("");

        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError("Error");
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h3 className="mb-4">Pet Boarding Registration</h3>

          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Booking ID</label>
              <input
                type="text"
                className="form-control"
                name="bookingId"
                value={input.bookingId}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Pet Name</label>
              <input
                type="text"
                className="form-control"
                name="petName"
                value={input.petName}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Pet Type</label>
              <input
                type="text"
                className="form-control"
                name="petType"
                value={input.petType}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Breed</label>
              <input
                type="text"
                className="form-control"
                name="breed"
                value={input.breed}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={input.age}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Weight (kg)</label>
              <input
                type="number"
                className="form-control"
                name="weight"
                value={input.weight}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Vaccination Status</label>
              <select
                className="form-control"
                name="vaccinationStatus"
                value={input.vaccinationStatus}
                onChange={inputHandler}
              >
                <option value="">Select</option>
                <option>Up to Date</option>
                <option>Pending</option>
                <option>Not Vaccinated</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-control"
                name="ownerName"
                value={input.ownerName}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Owner Phone</label>
              <input
                type="text"
                className="form-control"
                name="ownerPhone"
                value={input.ownerPhone}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Owner Email</label>
              <input
                type="email"
                className="form-control"
                name="ownerEmail"
                value={input.ownerEmail}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Check-in Date</label>
              <input
                type="date"
                className="form-control"
                name="checkInDate"
                value={input.checkInDate}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Check-out Date</label>
              <input
                type="date"
                className="form-control"
                name="checkOutDate"
                value={input.checkOutDate}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Kennel Number</label>
              <input
                type="text"
                className="form-control"
                name="kennelNumber"
                value={input.kennelNumber}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12">
              <button className="btn btn-primary" onClick={readValues}>
                Add Pet Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPet;