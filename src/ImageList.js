import React from 'react';
import images from './Data.js';
import ImageItem from './ImageItem.js';

export default class ImageList extends React.Component {
    render() {
        return (
            <div>
                {images.map(image => {
                    return <ImageItem 
                    title={image.title}
                    url={image.url}
                    description={image.description}
                    horns={image.horns}
                    keyword={image.keyword}/>
                })}
            </div>
        )
    }
}