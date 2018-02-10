import React, { Component } from 'react';
import Routes from './Routes';
import { withRouter } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class App extends Component {
  render() {
    return (
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Routes/>
          </MuiThemeProvider>
    );
  }
}


export default withRouter(App);