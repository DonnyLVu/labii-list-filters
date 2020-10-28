import './App.css';
import React from 'react';
import images from './Data.js';
import DropDown from './DropDown.js';
import Header from './Header.js';
// import Footer from './Footer'
import ImageList from './ImageList.js';

export default class App extends React.Component {
state = {
  filter: '',
  horns: '',
  cool: '',
}
handleChange = e => {
  this.setState({
      filter: e.target.value,
  });
}
handleChangeHorns = e => {
    this.setState({
        horns: e.target.value,
    });
}
handleChangeReal = e => {
  this.setState({
      real: e.target.value,
  });
}

render() {
  return (
    <div>
      <Header />
      <DropDown handleChange={this.handleChange} handleChangeHorns={this.handleChangeHorns} handleChangeReal={this.handleChangeReal} />
      <ImageList imagesProp={images} horns={this.state.horns} filter={this.state.filter} size={this.state.size} real={this.state.real}/>
    </div>
  )
}
}