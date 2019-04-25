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
    console.log(this.state.sports['basketball'])
  }

  render () {
    
    return (
      <div className="App">
        <header className="App-header">
          <Sports sports={this.state.sports} />
          <Teams sports={this.state.sports} />
          <Players sports={this.state.sports} />
  
        </header>
      </div>
    );


  }
}

export default App;
