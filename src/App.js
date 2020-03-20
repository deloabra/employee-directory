import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import EmployeeCard from "./components/EmployeeCard";
import Header from "./components/Header";
import SortForm from "./components/SortForm";

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
  const alphabetize = (arr) => {
    return arr.sort((emp1, emp2) => emp1.name.last.localeCompare(emp2.name.last));
  }

  return(
    <div className="bg-dark">
      <Header/>
      <div className="container">
        <SortForm/>
        <Router>

          <Route exact path="/">
            {employees.map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last}
            email={employee.email} phone={employee.phone} src={employee.picture.medium}/>)}
          </Route>

          <Route exact path="/employee-directory">
            {employees.map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last}
            email={employee.email} phone={employee.phone} src={employee.picture.medium}/>)}
          </Route>

          <Route exact path="/male">
            {getGender("male").map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last}
            email={employee.email} phone={employee.phone} src={employee.picture.medium}/>)}
          </Route>

          <Route exact path="/female">
            {getGender("female").map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last}
            email={employee.email} phone={employee.phone} src={employee.picture.medium}/>)}
          </Route>

          <Route exact path="/sort">
            {alphabetize(employees).map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last}
            email={employee.email} phone={employee.phone} src={employee.picture.medium}/>)}
          </Route>

              {/* Unimplemented Routes */}
          {/* <Route exact path="/male/sort">
            {alphabetize(getGender("male")).map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last}
            email={employee.email} phone={employee.phone} src={employee.picture.medium}/>)}
          </Route>

          <Route exact path="/female/sort">
            {alphabetize(getGender("female")).map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last}
            email={employee.email} phone={employee.phone} src={employee.picture.medium}/>)}
          </Route> */}

        </Router>
      </div>
    </div>
  );
}

export default App;
