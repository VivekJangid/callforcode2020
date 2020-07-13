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
        <div classname="container" >
          <div id="accordion">
            <div id="IndStats" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <StatsInd/>
            </div>
            <div id="WorldStats" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <StatsWorld/>
            </div>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-danger btn-lg btn-primary " data-toggle="collapse" data-target="#IndStats" aria-expanded="true">
              India Stats
            </button>
            <button type="button" className="btn btn-warning btn-lg btn-primary" data-toggle="collapse" data-target="#WorldStats" aria-expanded="false">
              World Stats
            </button>
          </div>
        </div>
      </div>
        
      
    );
  }
  
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));