import React,{useState} from 'react';


function Testing() {
  
const [bodyData,setBodyData] = useState([
  [1, 2, 3 ,10 ,11],
  [4, 5, 6 ,12 ,13],
  [7, 8, 9 ,15 ,16],
]);
  
const [headerData,setHeaderData] = useState([
  {
    head1: '330.1',
    head2: 'LT-01',
    unit: 'cm',
    attribute: 'Length',
    order: 1,
    value: 10,
  },
  {
    head1: '330.2',
    head2: 'LT-02',
    unit: 'g',
    attribute: 'Weight',
    order: 2,
    value: 50,
  },
  {
    head1: '330.3',
    head2: 'LT-03',
    unit: '°C',
    attribute: 'Temperature',
    order: 3,
    value: 25,
  },
  {
    head1: '330.4',
    head2: 'TT-01',
    unit: '%',
    attribute: 'Humidity',
    order: 4,
    value: 80,
  },
  {
    head1: '330.6',
    head2: 'TT-03',
    unit: 'kg',
    attribute: 'Mass',
    order: 5,
    value: 75,
  },
]);
const [sortedData,setSortedData ]= useState([...headerData].sort((a, b) => a.order - b.order));
  return (
    <table>
      <thead>
        <tr>
          {sortedData.map((header, index) => (
            <th key={index}><div><div>{header.head1}</div><div>
            {header.head2}</div><div>{header.unit}</div></div></th>
          ))};
        </tr>
      </thead>
      <tbody>
        {bodyData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))};
      </tbody>
    </table>
  );
};
export default Testing;
