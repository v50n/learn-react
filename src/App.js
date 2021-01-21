import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      ninjas : [
        {name: "Son", age: 30, belt: "black", id: 1},
        {name: "Sasuke", age: 18, belt: "yellow", id: 2},
        {name: "Naruto", age: 30, belt: "master", id: 3}
      ]
    };
  }

  AddNinja = (ninja) => {
    ninja.id = Math.random();
    let newNinjasValue = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: newNinjasValue
    });
  }

  deleteNinja = (id) => {
    let newNinjasValue = [...this.state.ninjas]; // copie the state value
    //console.log(newNinjasValue.filter(ninja => ninja.id !== id));
    this.setState({
      ninjas: newNinjasValue.filter(ninja => ninja.id !== id) // update state.ninjas with new list without id deleted
    });
  }

  render() {
    return (
      <div className="App">
      <h1>
        First react lesson
      </h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja newNinja={this.AddNinja} />
    </div>
    );
  }
}

export default App;

