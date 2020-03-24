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

  const defaultSort = () => (employees.map(employee => <EmployeeCard key={employee.name.first+employee.name.last} firstName={employee.name.first} lastName={employee.name.last}
    email={employee.email} phone={employee.phone} src={employee.picture.medium}/>));

  const maleSort = () => (getGender("male").map(employee => <EmployeeCard key={employee.name.first+employee.name.last} firstName={employee.name.first} lastName={employee.name.last}
    email={employee.email} phone={employee.phone} src={employee.picture.medium}/>));

  const femaleSort = () => (getGender("female").map(employee => <EmployeeCard key={employee.name.first+employee.name.last} firstName={employee.name.first} lastName={employee.name.last}
    email={employee.email} phone={employee.phone} src={employee.picture.medium}/>));

  const alphaSort = () => (alphabetize(employees).map(employee => <EmployeeCard key={employee.name.first+employee.name.last} firstName={employee.name.first} lastName={employee.name.last}
    email={employee.email} phone={employee.phone} src={employee.picture.medium}/>));

  return(
    <Router>
    <div className="bg-dark">
      <Header/>
      <div className="container">
        <SortForm/>

        <Route exact path="/" component={defaultSort}/>
        <Route exact path="/employee-directory" component={defaultSort}/>
        <Route exact path="/male" component={maleSort}/>
        <Route exact path="/female" component={femaleSort}/>
        <Route exact path="/sort" component={alphaSort}/>

      </div>
    </div>
    </Router>
  );
}

export default App;
