import './App.css';
import React from 'react';
import images from './Data.js';
import Header from './Header';
import Footer from './Footer';
import ImageList from './ImageList';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <ImageList imagesProp={images} />
        <Footer className='footer'/>
      </div>
    )
  }
}