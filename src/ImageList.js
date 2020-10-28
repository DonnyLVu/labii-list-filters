
import React from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends React.Component {
    render() {  
        return (
            <>
                <div className= 'entireCollection'>
                    {
                        this.props.imagesProp.filter((image) => {
                            if (!this.props.filter) return true;
                            if (image.keyword === this.props.filter) return true;
                            return false;
                          })

                        .filter((image) => {
                            if (!this.props.horns) return true;
                            if (image.horns === +this.props.horns) return true;
                            return false;
                          })

                        .filter((image) => {
                            if (!this.props.real) return true;
                            if (image.real === this.props.real) return true;
                            return false;
                          })
                    
                        .map(image => {
                        return <ImageItem title={image.title}
                            url={image.url}description={image.description}horns={image.horns}keyword={image.keyword}size={image.size}real={image.real}/>
                    })}
                </div>
            </>
        )
    }
}