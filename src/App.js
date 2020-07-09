import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{
  state = {
        persons: [
          {name: 'Max', age:29},
          {name: 'Harry', age:30},
          {name: 'John', age:31}
        ]
      }

  // handLingEvent = () => {
  //   this
  // }
  render(){
    return (
      <div className="App">
        <h1> React App</h1>
        <button onClick={this.handLingEvent}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

// function App() {
//   const [name, setName] = useState('');

//   return (
//     <div className="App">
           
//     </div>
//   )
// };

export default App;
