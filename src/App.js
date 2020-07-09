import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// class App extends Component{
//   state = {
//         persons: [
//           {name: 'Max', age:29},
//           {name: 'Harry', age:30},
//           {name: 'John', age:31}
//         ],
//         otherState: "other state",
//         year: 1990
//       }

//   handLingEvent = () => {
//     // this.state.persons[0].name = this.state.persons[1].name; => DO NOT do this
//     this.setState({
//       persons: [
//         {name: 'MAX', age:39},
//         {name: 'HARRY', age:40},
//         {name: 'JOHN', age:41}
//       ]
//     });
//   }

//   render(){
//     return (
//       <div className="App">
//         <h1> React App</h1>
//         <button onClick={this.handLingEvent}>Switch name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//       </div>
//     );
//   }
// }

// export default App;

const App = props => {
  const [personsState, setPersonsState] = useState({
    // "useState" always return an array. In this case, exactly 2 elements. Always!!!
    persons: [
      { name: "Max", age: 29 },
      { name: "Harry", age: 30 },
      { name: "John", age: 31 },
    ],
    otherState: "other state",
  });


  // const [firstElement, secondElement] = useState()

  // first element (persons Object) will always be current state
  // &
  // second element is a function that allows to update this state and will re-render components

  const handLingEvent = () => {
    // this.state.persons[0].name = this.state.persons[1].name; => DO NOT do this
    setPersonsState({
      persons: [
        { name: "MAX", age: 39 },
        { name: "HARRY", age: 40 },
        { name: "JOHN", age: 41 },
      ]
    });
  };

  return (
    <div className="App">
      <h1> React App</h1>
      <button onClick={handLingEvent}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
