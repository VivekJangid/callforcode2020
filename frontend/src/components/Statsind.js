import React, { Component } from 'react';
import axios from  'axios';

class StatsInd extends Component{
    state = {
        deathcases : null,
        newdeath : null,
        activecases : null,
        newactive : null,
        recoveredcases : null,
        newrecovered : null,
        confirmedcases : null,
        newconfirmed : null,
      }
    
      componentDidMount() {
        axios.get('https://api.thevirustracker.com/free-api?countryTotal=IN')
        .then(response => 
          {
            let resp = response.data.countrydata[0];
            this.setState({
              
              newdeath : resp.total_new_deaths_today,
              deathcases : resp.total_deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
              
              newconfirmed : resp.total_new_cases_today,
              confirmedcases : resp.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
              
              newactive : resp.total_active_cases,
              activecases : resp.total_serious_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
              
              newrecovered : resp.total_active_cases,
              recoveredcases : resp.total_recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})
          }
        )
        .catch(error => {
          console.log(error);
        });
      }
      
      render() {
        return (
          <div className="container">
            <div className="container text-center">
              <h3 style={{textDecoration: 'none', color: 'rgb(16, 112, 224)' , marginTop: "2px"}}>India Coronavirus Tracker</h3>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card mb-5 text-center border-0" style={{maxWidth: "18rem", padding: "0.5%" , margin: "3%"}}>
                        <div className="card-body">
                            <p>Total </p>
                            <span className="card-title">{(this.state.newconfirmed) ? <p>+{this.state.newconfirmed}</p> : " "}</span>
                            <p className="card-text">{this.state.confirmedcases}</p>
                            <svg width="100" height="60" viewBox="0 0 100 75" preserveAspectRatio="xMidYMid meet">
                              <path fill="none" stroke="#ff073a99" strokeWidth="2.5" d="M5,30.3809642767924C6.5,29.987266494573515,8,29.593568712354624,9.5,28.846490132400703C11,28.09941155244678,12.5,26.564937408055073,14,25.89849279706887C15.5,25.232048186082665,17,25.24419185610792,18.5,24.84782246648347C20,24.45145307685902,21.5,24.027638992977487,23,23.520276459322172C24.5,23.012913925666858,26,21.803647264551586,27.5,21.803647264551586C29,21.803647264551586,30.5,22.3486551752852,32,22.921350653676406C33.5,23.494046132067613,35,25.239820134898824,36.5,25.239820134898824C38,25.239820134898824,39.5,22.988869459016847,41,22.18544425014572C42.5,21.382019041274596,44,21.038353179559778,45.5,20.41926888167208C47,19.800184583784386,48.5,18.51951314292059,50,18.470938462819554C51.5,18.422363782718516,53.00000000000001,18.446651122769037,54.50000000000001,18.398076442668C56.00000000000001,18.349501762566963,57.5,15.648263802148392,59,15.648263802148392C60.5,15.648263802148392,62,15.98561495545008,63.5,16.423515696560912C65,16.861416437671746,66.5,18.19503427984567,68,18.27566824881339C69.5,18.356302217781106,71,18.396619202264965,72.5,18.396619202264965C74,18.396619202264965,75.5,17.58372193077414,77,16.687276209509534C78.5,15.790830488244927,80,13.766966441835285,81.5,13.017944874677323C83,12.26892330751936,84.5,12.3974033363866,86,11.894412523940378C87.5,11.391421711494157,89,10,90.5,10C92,10,93.5,10.056103755516697,95,10.112207511033393" strokeDasharray="98.05064392089844" strokeDashoffset="0"></path><circle fill="#ff073a" r="2.5" cx={95} cy="10.112207511033393" style={{opacity: 1}} /></svg>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-5 text-center border-0" style={{maxWidth: "18rem", padding: "0.5%" , margin: "3%"}}>
                        <div className="card-body">
                            <p>Active </p>
                            <span className="card-title">{(this.state.newactive) ? <p>+{this.state.newactive}</p> : " "}</span>
                            <p className="card-text">{this.state.activecases}</p>
                            <svg width="100" height="60" viewBox="0 0 100 75" preserveAspectRatio="xMidYMid meet">
                              <path fill="none" stroke="#f5b342" strokeWidth="2.5" d="M5,46.465983845449244C6.5,45.217978876953396,8,43.96997390845755,9.5,42.298276292780415C11,40.62657867710328,12.5,36.43579815138646,14,36.43579815138646C15.5,36.43579815138646,17,41.001332334082775,18.5,41.001332334082775C20,41.001332334082775,21.5,37.21396452660504,23,37.21396452660504C24.5,37.21396452660504,26,42.61741194104422,27.5,42.61741194104422C29,42.61741194104422,30.5,36.766591722874516,32,36.766591722874516C33.5,36.766591722874516,35,41.54779748521942,36.5,41.54779748521942C38,41.54779748521942,39.5,38.118910816887336,41,38.118910816887336C42.5,38.118910816887336,44,40.11095844783079,45.5,40.11095844783079C47,40.11095844783079,48.5,39.884600438559964,50,39.43188442001832C51.5,38.97916840147668,53.00000000000001,33.885627446082104,54.50000000000001,33.885627446082104C56.00000000000001,33.885627446082104,57.5,36.986635023732205,59,36.986635023732205C60.5,36.986635023732205,62,33.932259138979106,63.5,33.932259138979106C65,33.932259138979106,66.5,38.55754017819968,68,38.55754017819968C69.5,38.55754017819968,71,38.06013545396508,72.5,37.45149471229911C74,36.842853970633136,75.5,34.905695728203845,77,34.905695728203845C78.5,34.905695728203845,80,42.712132567241234,81.5,42.712132567241234C83,42.712132567241234,84.5,34.33154300940959,86,33.550462153384956C87.5,32.76938129736032,89,32.378840869348,90.5,32.378840869348C92,32.378840869348,93.5,33.0972603880423,95,33.81567990673661" strokeDasharray="127.51441955566406" strokeDashoffset="0"></path>
                            <circle fill="#f5b342" r="2.5" cx={95} cy="33.81567990673661" style={{opacity: 1}} />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card success mb-3 text-center border-0" style={{maxWidth: "18rem", padding: "0.5%" , margin: "3%"}}>
                        <div className="card-body">
                            <p>Cured</p>
                            <span className="card-title">{(this.state.newrecovered) ? <p>+{this.state.newrecovered}</p> : " "}</span>
                            <p className="card-text">{this.state.recoveredcases}</p>
                            <svg width="100" height="60" viewBox="0 0 100 75" preserveAspectRatio="xMidYMid meet">
                              <path fill="none" stroke="#28a74599" strokeWidth="2.5" d="M5,29.496419352152554C6.5,31.81998917478558,8,34.14355899741861,9.5,34.46998084769756C11,34.79640269797652,12.5,34.959613623116,14,34.959613623116C15.5,34.959613623116,17,29.34778083104338,18.5,29.34778083104338C20,29.34778083104338,21.5,31.84257640103256,23,31.84257640103256C24.5,31.84257640103256,26,24.63652260804397,27.5,24.63652260804397C29,24.63652260804397,30.5,31.77554334249313,32,31.77554334249313C33.5,31.77554334249313,35,29.146681655425095,36.5,29.146681655425095C38,29.146681655425095,39.5,29.754350903489048,41,29.754350903489048C42.5,29.754350903489048,44,26.781337607905183,45.5,25.926180364726456C47,25.07102312154773,48.5,24.623407444416685,50,24.623407444416685C51.5,24.623407444416685,53.00000000000001,30.069114830543757,54.50000000000001,30.069114830543757C56.00000000000001,30.069114830543757,57.5,24.264926305271047,59,24.264926305271047C60.5,24.264926305271047,62,28.05083687234574,63.5,28.05083687234574C65,28.05083687234574,66.5,25.331626280289782,68,25.331626280289782C69.5,25.331626280289782,71,26.341736752990812,72.5,26.68977433591473C74,27.03781191883865,75.5,27.419851777833294,77,27.419851777833294C78.5,27.419851777833294,80,15.856649179781826,81.5,15.856649179781826C83,15.856649179781826,84.5,23.990965109501207,86,23.990965109501207C87.5,23.990965109501207,89,23.8311544119688,90.5,23.51153301690399C92,23.19191162183918,93.5,22.56262664113026,95,21.93334166042135" strokeDasharray="129.22216796875" strokeDashoffset="0"></path>
                            <circle fill="#28a745" r="2.5" cx={95} cy="21.93334166042135" style={{opacity: 1}} />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-5 text-center border-0" style={{maxWidth: "18rem", padding: "0.5%" , margin: "3%"}}>
                        <div className="card-body">
                            <p>Death</p>
                            <span className="card-title">{(this.state.newdeath) ? <p>+{this.state.newdeath}</p> : " "}</span>
                            <p className="card-text">{this.state.deathcases}</p>
                            <svg width="100" height="60" viewBox="0 0 100 75" preserveAspectRatio="xMidYMid meet">
                              <path fill="none" stroke="#6c757d99" strokeWidth="2.5" d="M5,44.4229328003997C6.5,43.25131151636273,8,42.07969023232576,9.5,42.07969023232576C11,42.07969023232576,12.5,44.50308102256641,14,44.50308102256641C15.5,44.50308102256641,17,44.50210952896439,18.5,44.50016654176034C20,44.4982235545563,21.5,44.469564493296694,23,44.469564493296694C24.5,44.469564493296694,26,44.551169955866435,27.5,44.551169955866435C29,44.551169955866435,30.5,44.37921558830877,32,44.37921558830877C33.5,44.37921558830877,35,44.54534099425431,36.5,44.54534099425431C38,44.54534099425431,39.5,44.31801149138147,41,44.31801149138147C42.5,44.31801149138147,44,44.36585755128098,45.5,44.38213006911483C47,44.39840258694868,48.5,44.40520304216282,50,44.41564659838454C51.5,44.426090154606264,53.00000000000001,44.44479140644517,54.50000000000001,44.44479140644517C56.00000000000001,44.44479140644517,57.5,44.39670247314515,59,44.39670247314515C60.5,44.39670247314515,62,44.44041968523607,63.5,44.44041968523607C65,44.44041968523607,66.5,44.42171843339717,68,44.39233075193604C69.5,44.36294307047492,71,44.26409359646932,72.5,44.26409359646932C74,44.26409359646932,75.5,44.330883781608236,77,44.361728703472394C78.5,44.39257362533655,80,44.44916312765426,81.5,44.44916312765426C83,44.44916312765426,84.5,44.40957476337192,86,44.352985261054215C87.5,44.29639575873651,89,44.10962611374803,90.5,44.10962611374803C92,44.10962611374803,93.5,44.24879257223749,95,44.387959030726954" strokeDasharray="91.40946197509766" strokeDashoffset="0"></path>
                            <circle fill="#6c757d" r="2.5" cx={95} cy="44.387959030726954" style={{opacity: 1}} />
                            </svg>
                        </div>
                    </div>
                </div>
          </div>
      </div>
        );
      }
}

export default StatsInd;