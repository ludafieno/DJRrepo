import React, { Component } from "react";
import axios from "axios";

import { Card } from 'antd';

class AnimalDetail extends Component {
  state = {
    animal: {}
  };

  componentDidMount() {
    const animalID = this.props.match.params.animalID;
    axios.get(`http://127.0.0.1:8000/api/animals/${animalID}`).then(res => {
      this.setState({
        animal: res.data
      });
     });
  }

  render() {
  return (
        <Card title={this.state.animal.name}>
            <h3> Meaning: {this.state.animal.meaning}</h3>
            <h3> Clade: {this.state.animal.clade}</h3>
            <p>{this.state.animal.description}</p>
            <img src={this.state.animal.img_url} height='300px' ></img>
        </Card>
    )
  }
}

export default AnimalDetail;
