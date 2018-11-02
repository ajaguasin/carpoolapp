import React, { Component } from 'react';
import Header from '../../components/main/header';
import Map from '../../components/main/map';
import Footer from '../../components/main/footer';


export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
        <Footer />
      </div>
    )
  }
}
