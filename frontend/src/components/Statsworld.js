import React, { Component } from "react";
import axios from "axios";
const heading = {
  textAlign: "center",
  margin: "0.5rem 0",
  padding: "1.5rem 1rem",
  background: "black",
  fontFamily: "inherit",
  borderRadius: 50,
  color: "white",
};
const deathsdark = {
  color: "grey",
  fontWeight: 700,
  fontSize: "1.3em",
  margin: "0px 10px 0px 0px",
};

const confirmed = {
  color: "red",
  fontWeight: 700,
  fontSize: "1.3em",
  margin: "0px 10px 0px 0px",
};
const deaths = {
  color: "black",
  fontWeight: 700,
  fontSize: "1.3em",
  margin: "0px 10px 0px 0px",
};

const recovered = {
  color: "green",
  fontWeight: 700,
  fontSize: "1.3em",
  margin: "0px 10px 0px 0px",
};
const active = {
  color: "orange",
  fontWeight: 700,
  fontSize: "1.3em",
  margin: "0px 10px 0px 0px",
};
const title = {
  margin: "0px 0px 19.2px",
  color: "inherit",
  fontSize: "1.5rem",
  lineHeight: "1.5",
  fontFamily: "inherit",
  letterSpacing: "0.1rem",
  float: "left",
  paddingLeft: 10,
};
const covidcol = {
  display: "inline-block",
  borderRight: "1px solid #6a6a6a",

  paddingRight: "0.8rem",
  paddingLeft: "0.8rem",
  fontSize: "15px",
  lineHeight: "1.5",
  float: "none",
};

const covidRecovered = {
  borderRight: 0,
  paddingRight: 0,
};
const covidtitle = {
  fontSize: "0.8em",
};
const covidnum = {
  fontWeight: 700,
  fontSize: "1.3em",
};
class StatsWorld extends Component {
  state = {
    worlddeathcases: null,
    worldactivecases: null,
    worldrecoveredcases: null,
    worldconfirmedcases: null,
  };

  componentDidMount() {
    axios
      .get("https://api.thevirustracker.com/free-api?global=stats")
      .then((response) => {
        let wresp = response.data.results[0];
        this.setState({
          worldactivecases: wresp.total_serious_cases
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          worldconfirmedcases: wresp.total_cases
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          worlddeathcases: wresp.total_deaths
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          worldrecoveredcases: wresp.total_recovered
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="container text-center">
          <h3
            style={{
              textDecoration: "none",
              color: "rgb(16, 112, 224)",
              marginTop: "2px",
              color: "red",
            }}
          >
            World Coronavirus Tracker
          </h3>
        </div>
        <div className="covid19-card dark_theme" style={heading}>
          <div
            className="child float-left-child"
            style={{ display: "inline-block" }}
          >
            <img
              src={"/static/world.png"}
              width="30"
              height="30"
              style={{ float: "left" }}
            />
            <h4 id="country" className="covid19-title-big" style={title}>
              World
            </h4>
          </div>
          <div className="covid19-row">
            {/* confirmed */}
            <div className="covid19-col covid19-confirmed" style={covidcol}>
              <div>
                <span
                  id="tot-cases"
                  className="covid19-num confirmed"
                  style={confirmed}
                >
                  {this.state.worldconfirmedcases}
                </span>
              </div>

              <div className="covid19-title" style={covidtitle}>
                Confirmed
              </div>
            </div>
            {/* deaths */}
            <div className="covid19-col covid19-deaths" style={covidcol}>
              <div>
                <span
                  id="tot-deaths"
                  className="covid19-num deaths-dark"
                  style={deathsdark}
                >
                  {this.state.worlddeathcases}
                </span>
              </div>
              <div className="covid19-title" style={covidtitle}>
                Deaths
              </div>
            </div>
            {/* recovered */}
            <div className="covid19-col covid19-confirmed" style={covidcol}>
              <div>
                <span
                  id="tot-cases"
                  className="covid19-num confirmed"
                  style={recovered}
                >
                  {this.state.worldrecoveredcases}
                </span>
              </div>

              <div className="covid19-title" style={covidtitle}>
                Confirmed
              </div>
            </div>
            {/* Active */}
            <div className="covid19-col covid19-confirmed" style={covidcol}>
              <div>
                <span
                  id="tot-cases"
                  className="covid19-num confirmed"
                  style={active}
                >
                  {this.state.worldactivecases}
                </span>
              </div>

              <div className="covid19-title" style={covidtitle}>
                Active
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsWorld;
