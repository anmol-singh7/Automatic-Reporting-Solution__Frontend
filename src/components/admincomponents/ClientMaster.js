import React, { useState,useEffect } from 'react';
import "./componentscss/ClientMaster.css";
import {fetchGetApi} from "../../api/singlecall"



function ClientMaster() {
  const URL=process.env.REACT_APP_URL
  console.log("NSJKDC",URL+"clients")
  const [clients, setClients] = useState([]);
  const fetch = async () => {
  const API=URL+"clients"
  const result = await fetchGetApi (API);
  console.log("result",result);
  setClients(result);
   console.log("clients",clients);
};

  useEffect(() => {
    fetch();
  }, []);



  const handleEditClient = (clientid) => {
    // handle edit client logic
    console.log(`Editing client with ID ${clientid}`);
  };

  const handleDeleteClient = (clientid) => {
    // handle delete client logic
    setClients(clients.filter((client) => client.clientid !== clientid));
  };
  console.log("url",process.env.REACT_APP_URL)
  return (
    <div>
    <label >
    <h1 className="clientmaster-h1">Client Master</h1>
  </label>
    <table className='clientmaster-table' >
      <thead className='clientmaster-thead'>
        <tr className='clientmaster-tr'>
          <th className='clientmaster-th'>No.</th>
          <th className='clientmaster-th'>Client ID</th>
          <th className='clientmaster-th'>Client Name</th>
          <th className='clientmaster-th'>Database Number</th>
          
          <th className='clientmaster-th'>Edit</th>
          <th className='clientmaster-th'>Delete</th>
        </tr>
      </thead>
      <tbody className='clientmaster-tbody'>
        {clients.map((client,key) => (
          <tr className='clientmaster-tr' key={key}>
             <td className='clientmaster-td'>{key+1}</td>
            <td className='clientmaster-td'>{client.clientid}</td>
            <td className='clientmaster-td'>{client.clientname}</td>
            <td className='clientmaster-td'>{client.databaseNum}</td>
           
            <td className='clientmaster-td'>
              <button onClick={() => handleEditClient(client.clientid)}>Edit</button>
            </td>
            <td className='clientmaster-td'>
              <button onClick={() => handleDeleteClient(client.clientid)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ClientMaster;