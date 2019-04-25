import React from 'react';
import './App.css';
import Sports from './Sports';
import Teams from './Teams';
import Players from './Players'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sport: '',
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

  _displayTeams = (sport) => {
    console.log(sport)
    this.setState({
      sport,
      team: ''
    })    
  }

  _displayPlayers = (team) => {
    console.log(team)
    this.setState({
      team
    })
  }

  render () {
    
    return (
      <div className="App">
        <header className="App-header">
          <Sports 
          sports={this.state.sports} 
          displayTeams={this._displayTeams} />
          
          {
          this.state.sport ? <Teams 
          sports={this.state.sports} 
          sport={this.state.sport} 
          displayPlayers={this._displayPlayers}/> : null
          }

          {
          this.state.team ? <Players 
          sports={this.state.sports} 
          sport={this.state.sport} 
          team={this.state.team}/> : null
          }
  
        </header>
      </div>
    );


  }
}

export default App;
