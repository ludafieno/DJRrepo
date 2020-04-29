import React, { Component } from "react";
import axios from "axios";
import Animal from '../components/Animal'


class AnimalList extends Component {
  state = {
    animals: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/animals/list").then(res => {
      this.setState({
        animals: res.data
      });
    });
  }

  render() {
    return <Animal data={this.state.animals} />;
  }
}

export default AnimalList;
