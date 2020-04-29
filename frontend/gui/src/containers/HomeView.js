import React, { Component } from "react";
import axios from "axios";
import { Carousel } from 'react-bootstrap'
import Articles from "../components/Article";

class HomeView extends Component {
  state = {
    articles: [],
    animals: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/animals/list").then(res => {
      this.setState({
        animals: res.data
      });
    });
  }

  render() {
    return(
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/a9/e8/60/a9e8603c729f89e6d7c427b48ab74fca.png"
            height='708px'
            width='398px'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.mos.cms.futurecdn.net/eZcRPJWCNXhJCUwsK3Loj9.jpg"
            height='708px'
            width='398px'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn1us.denofgeek.com/sites/denofgeekus/files/8qkqujl.jpg"
            height='708px'
            width='398px'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://playingintheworldgame.files.wordpress.com/2013/12/statue_ring_the_lord_of_rings_tolkien_argonath_lotr_isildur_anarion_fellowship_desktop_2011x1135_hd-wallpaper-25254.jpg"
            height='708px'
            width='398px'
          />
        </Carousel.Item>
      </Carousel>
      <Articles data={this.state.articles}/>
    </div>)
  }
}

export default HomeView;
