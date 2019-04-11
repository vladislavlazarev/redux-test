import React, { Component } from 'react';
import {connect} from "react-redux";
import { getData } from "./actions/testAction";
import { getValue } from "./actions/newAction";
import { getDataPhotos } from "./actions/getPhotos";

class App extends Component {
  componentDidMount() {
    this.props.data();
    this.props.value();
    this.props.photos();
    this.props.comment();
  }

  render() {
    console.log(this.props);

    return (
      <>

      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    test : state.test,
    newAction: state.newAction,
    getPhotos: state.getPhotos,
    getComments: state.getPhotos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    data : () => {dispatch(getData())},
    value: () => {dispatch(getValue())},
    photos: () => {dispatch(getDataPhotos())},
    comment: () => {dispatch(getDataPhotos())}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
