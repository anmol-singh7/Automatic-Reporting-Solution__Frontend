import React, { useState,useEffect } from 'react';
import "./componentscss/ManufacturerMaster.css";
import {fetchGetApi} from "../../api/singlecall"

function ManufacturerMaster() {
  const [Manufacturers, setManufacturers] = useState([   
  ]);

  const handleEditManufacturer = (manufacturerid) => {
    // handle edit Manufacturer logic
    console.log(`Editing Manufacturer with ID ${manufacturerid}`);
  };
  const fetch = async () => {
    const URL=process.env.REACT_APP_URL;
    const API=URL+"manufacturers"
    const result = await fetchGetApi (API);
    console.log("result",result);
    setManufacturers(result);
     console.log("clients",Manufacturers);
  };
  
    useEffect(() => {
      fetch();
    }, []);
  const handleDeleteManufacturer = (manufacturerid) => {
    // handle delete Manufacturer logic
    setManufacturers(Manufacturers.filter((Manufacturer) => Manufacturer.manufacturerid !== manufacturerid));
  };

  return (
    <div>
    <label >
    <h1 className="clientmaster-h1">Manufacturer Master</h1>
  </label>
    <table className='manufacturermaster-table'>
      <thead className='manufacturermaster-thead'>
        <tr className='manufacturermaster-tr'>
           <th className='manufacturermaster-th'>No.</th>
          <th className='manufacturermaster-th'>Manufacturer ID</th>
          <th className='manufacturermaster-th'>Manufacturer Name</th>
         
         
          <th className='manufacturermaster-th'>Edit</th>
          <th className='manufacturermaster-th'>Delete</th>
        </tr>
      </thead>
      <tbody className='manufacturermaster-tbody'>
        {Manufacturers.map((Manufacturer,key) => (
          <tr className='manufacturermaster-tr' key={key}>
            <td className='manufacturermaster-td'>{key+1}</td>
            <td className='manufacturermaster-td'>{Manufacturer.manufacturerid}</td>
            <td className='manufacturermaster-td'>{Manufacturer.manufacturername}</td>
          
            
            <td className='manufacturermaster-td'>
              <button className='manufacturermaster-button' onClick={() => handleEditManufacturer(Manufacturer.manufacturerid)}>Edit</button>
            </td>
            <td className='manufacturermaster-td'>
              <button className='manufacturermaster-button' onClick={() => handleDeleteManufacturer(Manufacturer.manufacturerid)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ManufacturerMaster;
