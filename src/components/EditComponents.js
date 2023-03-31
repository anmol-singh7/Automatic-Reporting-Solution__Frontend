import React,{useState,useEffect} from 'react';
import { fetchPostApi } from "../api/singlecall";

import { useLocation } from "react-router-dom";
import "../components/admincomponents/componentscss/EditComponent.css"


function ViewBoard() {
   
    const URL=process.env.REACT_APP_URL;
    const API10 = URL+"advancesearch";
    const API11=URL+"description/reportid";
    const API12=URL+"getsetdata/reportid";
    const [description,setdec]=useState({clientid:"",systems:"",manufacturer:"",datebegin:"",timebegin:"",dateend:"",timeend:"",reportname:""});
    const [clientname,setclientname]=useState("");
    const [data,FillSetPointData]=useState([[]]);
    const {state} = useLocation();
    

  // const [data, setData] = useState([ 
  // ['HHSP', '500', '-', '-','-','-'],
  // ['HSP', '-', '1000', '-','-','-'],
  // ['SCSP', '5800', '-', '1.3','-','-'],
  // ['CSP', '-', '13.5', '-','-','-']]);
  const [body, setBody] = useState([]);
  const [headi2, setHeadi2] = useState([[]]);
  const [heading, setHeading] = useState([]);

  const fetch2 = async (AP,data2) => {
    
    const result1 = await fetchPostApi (AP,data2);
     console.log("result1",result1)
     setdec(result1.result[0]);
     setclientname(result1.clientname)

  };
  const fetch1 = async (API,data2) => {
    
    const resultsetdataapi = await fetchPostApi (API,data2);
    FillSetPointData(resultsetdataapi.setdata)
      console.log("resultsetdataapi",resultsetdataapi.setdata);
    //  FillSetPointData(result1.setdata);

  };
  const xat=async()=>{
//     const delta = { reportid:repId.reportid ,databasename: formValues.databasename, tablename: formValues.table1 };

// const response3 =await fetchPostApi(API10,delta);
// console.log(response3);
const delta = { reportid:state.alfa ,databasename:"bz2vx6b6k3kn9nlapzd9", tablename:"cLIENT_2_table_1"};
   
    const response3 =await fetchPostApi(API10,delta);
    console.log(response3);
    setHeading(response3.firstheader);
    const arr = {
      sensorname: "S5",
      head1: "Set Points",
      head2: "Date and Time",
      unit: "",
      attribute: "",
      formtype: "",
    };
    setHeading([arr, ...response3.firstheader]) ;
    const pan=response3.body;
    var te = [[]];
    for (var i = 0; i < pan.length - 1; i++) {
      te[i] = Object.values(pan[i]);
    }
    setHeadi2([arr,...response3.secondheader]);
    setBody(te);
};

useEffect(() => {
  
  const xx={reportid:state.alfa};
 console.log("xxxxxxxxxx",xx)

   fetch1(API12,xx);
   fetch2(API11,xx);
  xat();
}, []);

const handlePrint =() =>{
    window.print();
  };


 
  return (<>
      <div className="finalformcreate-container">
     
      <table className="finalformcreate-table " htmlFor="#table" style={{ borderWidth:"0.5px", borderColor: "black" }}>
        <thead className="finalformcreate-thead">
        <tr className="finalformcreate-tr"><th colSpan={heading.length} style={{textAlign:"center"}}>{description.reportname}</th></tr>
            <tr className="finalformcreate-tr"><th>Client </th><th colSpan={heading.length-1}>{clientname}</th></tr>
            <tr className="finalformcreate-tr"><th>System Name</th><th colSpan={heading.length-1}>{description.systems}</th></tr>
            <tr className="finalformcreate-tr"><th>Manufactured By </th><th colSpan={heading.length-1}>{description.manufacturer}</th></tr>
            <tr className="finalformcreate-tr"><th>From  Date and Time</th><th colSpan={heading.length-1}>{description.datebegin}  {description.timebegin}</th></tr>
            <tr className="finalformcreate-tr"><th>To Date and Time </th><th colSpan={heading.length-1}>{description.dateend} {description.timeend}</th></tr>
            <tr className="finalformcreate-tr"> <th colSpan={heading.length}></th></tr>


            <tr className="finalformcreate-tr">
            
            {heading.map((header, col) => (
              <th className="finalformcreate-th" key={col}>
                {col === 0 ? (
                  <div>
                    <th>
                      <tr>{header.head1}</tr>
                      <tr>{}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                  </div>
                ) : (
                  <div>
                    <th>
                      <tr>{header.head1}</tr>
                      <tr>{header.head2}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="finalformcreate-tbody">
       
        {data.map((row, rowIndex) => (
            <tr className="finalformcreate-tr" key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td className="finalformcreate-td" key={colIndex}>
           
                    {cell}              
                </td>  ))}           
            </tr>
 ))}
      
          <tr className="finalformcreate-tr">
            {headi2.map((header, col) => (
              <th className="finalformcreate-th" key={col}>
                {col > 1 ? (
                  <div >
                    
           
                    <div >
                    <th>
                    
                      <tr>{header.head1}</tr>
                      <tr>{header.head2}</tr>
                      <tr>{header.unit}</tr>
                    </th>
                    </div>

                 
                  </div>
                ) : (
                  <>
                    {col === 1 ? (
                      <div>
                        
                        
                        <th>
                          <tr>{header.head1}</tr>
                          <tr>{header.head2}</tr>
                          <tr>{header.unit}</tr>
                        </th>
                      \
                      </div>
                    ) : (
                      <div>
                       
                        <th>
                          <tr>{}</tr>
                          <tr>{header.head2}</tr>
                          <tr>{header.unit}</tr>
                        </th>
                       
                      </div>
                    )}
                  </>
                )}
              </th>
            ))}
          </tr> 
          {body.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>Enter comments <input className='editcomponent-input' type='textarea'/></tr>
        <tr>Created By </tr>
        <tr>Checked By<input type='text'/> </tr>
        </tfoot>
       
        <button
          className="finalformcreate-submit-button"
          onClick={handlePrint}
        >
         Print
        </button>
      </table>
    </div>
    </>)
}

export default ViewBoard;
