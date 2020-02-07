import React, {Component} from 'react';
import './styles/App.css';
import CharmList from './CharmList';
import CharmDetail from './CharmDetail';
import Charm from '../Charm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      charm: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  

  handleOnClick(id) {
    fetch(`//localhost:5000/api/${id}`)
      .then(res => res.json())
      .then(data => {
        const charm = new Charm(data);
        this.setState({charm});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="main">
        <CharmList handleOnClick={this.handleOnClick} />
        <CharmDetail charm={this.state.charm} />
      </div>
    );
  }
}

export default App;
