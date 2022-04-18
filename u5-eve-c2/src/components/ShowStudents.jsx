import {useState, useEffect} from 'react';

export const ShowStudents = () => {
  const [mydata, setmyData] = useState([]);
  const [load, setLoad] = useState(true);
  const [sortKey, setSortKey] = useState("first_name");

  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8080/students")
      .then((data) => data.json())
      .then((data) => {
        setmyData(data);
      });

    setLoad(false);

     };

  const handleSort = async() => {
    sortOrder == "asc"
      ? setmyData(
          mydata.sort((a, b) => {
            return a[sortKey] - b[sortKey];
          })
        )
      : setmyData(
          mydata.sort((a, b) => {
            return b[sortKey] - a[sortKey];
          })
      );
    
  };


  return  load ? (
    <div>loading....</div>
  ) : (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onChange={(e) => {
              setSortKey(e.target.value);
            }}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={handleSort}>
          Sort
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {mydata.map((el) => (
            <tr className="row" key={ el.id}>
              <td className="first_name">{el.first_name}</td>
              <td className="last_name">{el.last_name}</td>
              <td className="email">{el.email}</td>
              <td className="gender">{el.gender}</td>
              <td className="age">{el.age}</td>
              <td className="tenth_score">{el.tenth_score}</td>
              <td className="twelth_score">{el.twelth_score}</td>
              <td className="preferred_branch">{el.preferred_branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};