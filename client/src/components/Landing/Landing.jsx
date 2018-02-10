import React, { Component } from 'react';
import axios from 'axios';
import { checkAuth } from '../../actions/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Landing extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { actions } = this.props;
    actions();
  }
  render() {
    return (
      <div>
        Landing
      </div>
    );
  }
}

const dispatch = (dispatch) => {
  return {
    actions: bindActionCreators(checkAuth, dispatch)
  }
}

export default connect(null, dispatch)(Landing);