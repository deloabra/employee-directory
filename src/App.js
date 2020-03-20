import React, {useState, useEffect} from 'react';
import API from "./utils/API";
import EmployeeCard from "./components/EmployeeCard";
import Header from "./components/Header";

//employeeList gets filled and then doesn't change after that
var employeeList;

function App(){

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.getUsers()
    .then((result) => employeeList = result.data.results)
    .then(() => setEmployees(employeeList))
    .catch(err => console.log(err));
  }, []);

  return(
    <div className="bg-dark">
      <Header/>
      <div className="container">
        {employees.map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last}
        email={employee.email} phone={employee.phone} src={employee.picture.medium}/>)}
      </div>
    </div>
  );
}

export default App;
