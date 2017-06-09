import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import SpotName from './SpotName';
import Loading from './Loading';
import './App.css';

class App extends Component {
  state = {
    url: null,
  };

  componentDidMount() {
    // XXX error handling
    fetch('http://104.236.153.98:8080/?s=4127')
      .then(r => r.json())
      .then(r => {
        this.setState({
          url: r.url,
        });
      });
  }

  render() {
    if (!this.state.url) {
      return (<Loading>Shit's Loading!</Loading>);
    }
    return (
      <div>
      <SpotName name="Ocean Beach" />
      <ReactPlayer
        width={window.screen.availWidth}
        height={window.screen.availHeight}
        style={{ margin: 0 }}
        url={this.state.url}
        playing
      />
      </div>
    );
  }
}

export default App;
