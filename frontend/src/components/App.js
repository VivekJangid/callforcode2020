import React, { Component } from "react";
import ReactDOM from "react-dom";
import StatsInd from "./Statsind";
import Navbar from "./Navbar";
import StatsWorld from "./Statsworld";


class App extends Component {
  render() {
    return (
      <div> 
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container">
                <StatsInd/>
              </div>
            </div>
            <div className="col">
              <div className="container">
                <StatsWorld/>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      
    );
  }
  
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));