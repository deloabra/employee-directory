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

  //filter by gender
  const getGender = (gender) => {
    return employees.filter((employee) => employee.gender === gender);
  }

  //sort by alphabet
  const alphabetize = (direction) => {
    if(direction === "inc"){
      return employees.sort((emp1, emp2) => emp1.name.last.localeCompare(emp2.name.last));
    }
    else{
      return employees.sort((emp1, emp2) => emp2.name.last.localeCompare(emp1.name.last));
    }
  }

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
