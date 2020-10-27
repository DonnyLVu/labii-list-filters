import React from 'react';
import images from './Data.js';

export default class ImageItem extends React.Component {
    render() {
        return (
            <div >
                <h3 >Title: {this.props.title}</h3>
                <img className="images" src={this.props.url} alt={this.props.title}></img>
                <div>Description: {this.props.description}</div>
                <div>Keyword: {this.props.keyword}</div>
                <div>Number of Horns: {this.props.horns}</div>
                <div>{this.props.caption}</div>
                <h3>{this.props.size}</h3>
            </div>
        )
    }
}