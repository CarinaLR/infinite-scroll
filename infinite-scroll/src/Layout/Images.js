import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

export class Images extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      count: 12,
      start: 0,
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { count, start } = this.state;
    try {
      const { data } = await axios.get(`/api/count=${count}&start=${start}`);
      console.log("data =>", data);
      this.setState({ images: data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    console.log("State ", this.state);
    return <div>Hello</div>;
  }
}

export default Images;
