import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sports from './Sports';
import Teams from './Teams';
import Players from './Players'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sport: 'football',
      team: '',
      sports: {
        "football": {
            "falcons": ["jones", "ryan", "freeman"],
            "eagles": ["wentz", "jackson", "howard"],
            "ravens": ["jackson", "thomas", "ingram"]
        },
        "baseball": {
            "Orioles": ["davis", "mancini", "hess"], 
            "Cardinals": ["goldschmidt", "molina", "ozuna"], 
            "Blue Jays": ["shoemaker", "galvis", "stroman"]
        },
        "basketball": {
            "Bucks": ["antetokounmpo", "brogdon", "lopez"], 
            "Grizzlies": ["conley", "noah", "parsons"], 
            "Timberwolves": ["rose", "towns", "wiggins"]
        }
      }
    }
  }

  _displayTeams = (e) => {
    console.log(e.target.textContent)
    this.setState({
      sport: e.target.textContent,
      team: ''
    })    
  }

  _displayPlayers = (e) => {
    console.log(e.target.textContent)
    this.setState({
      team: e.target.textContent,
    })
  }

  render () {
    
    return (
      <div className="App">
        <header className="App-header">
          <Sports sports={this.state.sports} displayTeams={this._displayTeams} />

          <Teams sports={this.state.sports} sport={this.state.sport ? this.state.sport : ''} displayPlayers={this._displayPlayers}/>

          <Players sports={this.state.sports} sport={this.state.sport ? this.state.sport : ''} team={this.state.team ? this.state.team : ''}/>
  
        </header>
      </div>
    );


  }
}

export default App;
