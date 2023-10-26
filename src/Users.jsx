import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://crud-backend-zly4.onrender.com")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  },[]);

  const handleDelete =(id)=>{
    axios.delete('https://crud-backend-zly4.onrender.com/deleteUser/'+id)
    .then(res => {console.log(res)
    window.location.reload()
    })
    .catch(err => console.log(err))
 
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/CreateUser" className="btn btn-success">
          Add+
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link
                    to={`/UpdateUser/${user._id}`}
                    className="btn btn-success"
                  >
                    Update
                  </Link>

                  <button className="btn btn-danger" 
                  onClick={(e)=>handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
