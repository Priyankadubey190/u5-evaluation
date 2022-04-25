import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const [emp, setEmp] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/employee/${id}`)
      .then((res) => setEmp(res.data));
  }, []);

  return (
    <div className="user_details">
      <img src={emp.image} className="user_image" />
      <h4 className="user_name">{emp.employee_name}</h4>
      <span className="user_salary">${emp.salary}</span>
      <span className="tasks">
        <li className="task">{emp.tasks}</li>
      </span>
      Status: <b className="status">{emp.status}</b>
      Title: <b className="title">{emp.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
