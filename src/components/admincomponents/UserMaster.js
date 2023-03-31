import React, { useState,useEffect } from "react";
import "./componentscss/UserMaster.css";
import {fetchGetApi} from "../../api/singlecall"

function UserMaster() {
  const URL=process.env.REACT_APP_URL;
  const [users, setUsers] = useState([

  ]);
  

  const fetch = async () => {
    const API=URL+"/users"
    const result = await fetchGetApi (API);
    console.log("result",result);
    setUsers(result);
     console.log("clients",users);
  };
  
    useEffect(() => {
      fetch();
    
    }, []);
  const handleEdituser = (userid) => {
    // handle edit user logic
    console.log(`Editing user with ID ${userid}`);
  };

  const handleDeleteuser = (userid) => {
    // handle delete user logic
    setUsers(users.filter((user) => user.userid !== userid));
  };

  return (
    <div>
      <label className="usermaster-label">
        <h1 className="usermaster-h1">User Master</h1>
      </label>
      <table className="usermaster-table">
        <thead className="usermaster-thead">
          <tr className="usermaster-tr">
             <th className="usermaster-th">No.</th>
            <th className="usermaster-th">User ID</th>
            <th className="usermaster-th">User Name</th>

           
            <th className="usermaster-th">Edit</th>
            <th className="usermaster-th">Delete</th>
          </tr>
        </thead>
        <tbody className="usermaster-tbody">
          {users.map((user,key) => (
            <tr className="usermaster-tr" key={key}>
              <td className="usermaster-td">{key+1}</td>
              <td className="usermaster-td">{user.userid}</td>
              <td className="usermaster-td">{user.username}</td>

              
              <td className="usermaster-td">
                <button
                  className="usermaster-button"
                  onClick={() => handleEdituser(user.userid)}
                >
                  Edit
                </button>
              </td>
              <td className="usermaster-td">
                <button
                  className="usermaster-button"
                  onClick={() => handleDeleteuser(user.userid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserMaster;
