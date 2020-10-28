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
                <div>Caption: {this.props.caption}</div>
                <div>Size?: {this.props.size}</div>
                <div>Real?: {this.props.real}</div>
            </div>
        )
    }
}