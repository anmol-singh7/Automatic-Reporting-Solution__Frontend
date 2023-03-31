import React, { useState,useEffect } from 'react';
import {fetchGetApi} from "../../api/singlecall"
import "./componentscss/SystemMaster.css";

function SystemMaster() {
  const URL=process.env.REACT_APP_URL;
  const [systems, setSystems] = useState([]);

  const handleEditsystem = (systemid) => {
    // handle edit system logic
    console.log(`Editing system with ID ${systemid}`);
  };

  const handleDeletesystem = (systemid) => {
    // handle delete system logic
    setSystems(systems.filter((system) => system.systemid !== systemid));
  }; 
  const fetch = async () => {
    const API=URL+"systems"
    const result = await fetchGetApi (API);
    console.log("result",result);
    setSystems(result);
     console.log("clients",systems);
  };
  
    useEffect(() => {
      fetch();
    }, []);
  
  return (
    <div>
    <label >
    <h1 className="clientmaster-h1">System Master</h1>
  </label>
    <table className='systemmaster-table'>
      <thead className='systemmaster-thead'>
        <tr className='systemmaster-tr'>
          <th className='systemmaster-th'>System ID</th>
          <th className='systemmaster-th'>System Name</th>
          <th className='systemmaster-th'>No.</th>
          <th className='systemmaster-th'>Edit</th>
          <th className='systemmaster-th'>Delete</th>
        </tr>
      </thead>
      <tbody className='systemmaster-tbody'>
        {systems.map((system,key) => (
          <tr className='systemmaster-tr' key={system.systemid}>
            <td className='systemmaster-td'>{system.systemid}</td>
            <td className='systemmaster-td'>{system.systemname}</td>
           
            <td className='systemmaster-td'>{key+1}</td>
            <td className='systemmaster-td'>
              <button className='systemmaster-button' onClick={() => handleEditsystem(system.systemid)}>Edit</button>
            </td>
            <td className='systemmaster-td'>
              <button className='systemmaster-button' onClick={() => handleDeletesystem(system.systemid)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default SystemMaster;