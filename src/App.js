import React, { Component } from 'react';
import {connect} from "react-redux";
import { getData } from "./actions/testAction";

class App extends Component {
  componentDidMount() {
    this.props.data();
  }

  render() {
    console.log(this.props.test);

    return (
      <>

      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    test : state.test
  }
};

const mapDispathToProps = dispatch => {
  return {
    data : () => {dispatch(getData())}
  }
};

export default connect(mapStateToProps, mapDispathToProps)(App);
