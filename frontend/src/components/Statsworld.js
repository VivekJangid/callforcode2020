import React, { Component } from 'react';
import axios from  'axios';

class StatsWorld extends Component{
    state = {
        worlddeathcases : null,
        worldactivecases : null,
        worldrecoveredcases : null,
        worldconfirmedcases : null,
    }
    
    componentDidMount(){
        axios.get('https://api.thevirustracker.com/free-api?global=stats')
        .then(response => 
          {
            let wresp = response.data.results[0];
            this.setState({
              worldactivecases: wresp.total_serious_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
              worldconfirmedcases: wresp.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
              worlddeathcases: wresp.total_deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
              worldrecoveredcases: wresp.total_recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})
          }
        )
        .catch(error => {
          console.log(error);
        });
    }
        
    
    render(){
        return(
                  <div className="container">
                    <div className="container text-center">
                      <h3 style={{textDecoration: 'none', color: 'rgb(246, 75, 47)' , marginTop: "2px"}}>World Coronavirus Tracker</h3>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card mb-5 text-center border-0" >
                                <div className="card-body">
                                    <p>Total : {this.state.worldconfirmedcases}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-5 text-center border-0" >
                                <div className="card-body">
                                    <p>Active {this.state.worldactivecases}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-100"></div>
                        <div className="col">
                            <div className="card success mb-3 text-center border-0" >
                                <div className="card-body">
                                    <p>Cured : {this.state.worldrecoveredcases}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-5 text-center border-0" >
                                <div className="card-body">
                                    <p>Death : {this.state.worlddeathcases}</p>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
        );
    }
}

export default StatsWorld;