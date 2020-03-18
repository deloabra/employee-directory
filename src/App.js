import React, {Component} from 'react';
import API from "./utils/API";

class App extends Component{

  state = {
    employees: []
  };

  componentDidMount(){
    API.getUsers()
    .then(result => this.setState({employees: result.data.results}))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        {this.state.employees.map(element => <p key={element.id.value}>{element.name.first}</p>)}
      </div>
    );
  }
}

export default App;
