import './App.css';
import React from 'react';
import Header from './Header';
import ImageList from './ImageList';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageList />
        <Footer/>
      </div>
    )
  }
}