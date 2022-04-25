import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employee")
      .then((res) => setEmployee(res.data));
  }, []);

  console.log(employee);
  return (
    <div
      className="list_container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
      }}
    >
      {employee.map((e) => (
        <Link to={`/employees/${e.id}`}>
          <div
            className="employee_card"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "3em",
              height: "300px",
              width: "300px",
            }}
          >
            <img src={e.image} alt="image" className="employee_image" />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
