import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Loading from './Loading';
import styled from 'styled-components';
import './App.css';

const HorizontalContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  width: ${window.screen.availWidth};
  height: ${window.screen.availHeight};
`;


class App extends Component {
  state = {
    urls: null,
    view: 'all',
  };

  componentDidMount() {
    // XXX error handling
    fetch('http://104.236.153.98:8080/?z=sf')
      .then(r => r.json())
      .then(r => {
        this.setState({
          urls: r.zones.sf,
        });
      });
  }

  render() {
    if (!this.state.urls) {
      return (<Loading>Shit's Loading!</Loading>);
    }

    if (this.state.view === 'all') {
      return (<div>
        <HorizontalContainer>
          <div>
            <ReactPlayer
              width="100%"
              height="100%"
              style={{ margin: 0 }}
              url={this.state.urls[0]}
              playing
            />
          </div>
          <div>
            <ReactPlayer
              width="100%"
              height="100%"
              style={{ margin: 0 }}
              url={this.state.urls[1]}
              playing
            />
          </div>
          </HorizontalContainer>
          <HorizontalContainer>
          <div>
            <ReactPlayer
              width="100%"
              height="100%"
              style={{ margin: 0 }}
              url={this.state.urls[2]}
              playing
            />
          </div>
          <div>
            <ReactPlayer
              width="100%"
              height="100%"
              style={{ margin: 0 }}
              url={this.state.urls[3]}
              playing
            />
          </div>
          </HorizontalContainer>
          </div>
      );
    }
    return null;
  }
}

export default App;
