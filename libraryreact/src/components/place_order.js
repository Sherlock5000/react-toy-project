import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";
import { Link, useHistory } from "react-router-dom";

const PlaceOrder = ({ user, setBookName, setStatusName }) => {
  const history = useHistory();
  const [book, setBook] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(book, status);
    setBookName(book);
    setStatusName(status);
    if (book !== "Choose..." && status !== "Choose...") {
      let path = `/customer`;
      history.push(path);
    }
  };
  return (
    <>
      <Navbar user={user} />
      <form className="form-inline">
        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
          Book
        </label>
        <select
          className="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          onChange={(e) => setBook(e.target.value)}
        >
          <option selected>Choose...</option>
          <option value="Book1">Book1</option>
          <option value="Book2">Book2</option>
          <option value="Book3">Book3</option>
        </select>

        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
          Status
        </label>
        <select
          className="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option selected>Choose...</option>
          <option value="Pending">Pending</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
        </select>

        {/* <div className="custom-control custom-checkbox my-1 mr-sm-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customControlInline"
          />
          <label className="custom-control-label" for="customControlInline">
            Remember my preference
          </label>
        </div> */}

        <button
          type="submit"
          className="btn btn-primary my-1"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default PlaceOrder;
