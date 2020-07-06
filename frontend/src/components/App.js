import React, { Component } from "react";
import ReactDOM from "react-dom";
import Stats from "./Stats";


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Reacts</h1>    
        
        <Stats/>
      </div>
      
    );
  }
  
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));