import React, { Component } from "react";
import ReactDOM from "react-dom";
import Stats from "./Stats";
import Navbar from "./Navbar";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>   
        <Stats/>
      </div>
      
    );
  }
  
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));