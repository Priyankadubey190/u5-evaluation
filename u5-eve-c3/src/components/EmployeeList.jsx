import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const EmployeeList = () => {
  const [mydata, setmyData] = useState([]);
  //const [load, setLoad] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:8080/employee")
      .then((res) => setmyData(res.data));

  }, []);
  console.log(mydata);
  var x = mydata.length;
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {mydata.map((e)=>(
      <Link to={`/employees/${e.id}`}>
      <div className="employee_card">
      
        <img src={e.image} className="employee_image" />
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
       
      </div> 
      </Link>
      ))}
    </div>
  );
};
