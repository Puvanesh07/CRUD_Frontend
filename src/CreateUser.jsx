import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://crud-backend-zly4.onrender.com/CreateUser", { name, email, age })
      .then((result) => {
        console.log(result)
        navigate('/')

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control"
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="form-control"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Age:</label>
            <input
              type="text"
              placeholder="Enter your Age"
              className="form-control"
              onChange={(e) => setage(e.target.value)}
            />
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
