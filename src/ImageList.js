
import React from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends React.Component {
    
    state = {
        filter: '',
        horns: '',
        real: '',
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
            <>
                <div className= 'drop-down'>
                    <select onChange={this.handleChange}>
                        <option value=''>SHOW EVERYTHING</option>
                        <option value='narwhal'>Narwhal</option>
                        <option value='rhino'>Rhino</option>
                        <option value='unicorn'>Unicorn</option>
                        <option value='unilego'>Unilego</option>
                        <option value='triceratops'>Triceratops</option>
                        <option value='markhor'>Markhor</option>
                        <option value='mouflon'>Mouflon</option>
                        <option value='addax'>Addax</option>
                        <option value='chameleon'>Chameleon</option>
                        <option value='lizard'>Lizard</option>
                        <option value='dragon'>Dragon</option>
                    </select>
                    <select onChange={this.handleChangeHorns}>
                        <option value=''>SHOW ALL THE HORNS</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='100'>100</option>
                    </select>
                    <select onChange={this.handleChangeReal}>
                        <option value=''>LIVING OR NONLIVING? DONT CARE!</option>
                        <option value='True'>True they are really "living"</option>
                        <option value='False'>False they are not real "living"</option>
                    </select>

                </div>
                <div className= 'whole-group'>
                    {
                        this.props.imagesProp.filter((image) => {
                            if (!this.state.filter) return true;
                            if (image.keyword === this.state.filter) return true;
                            return false;
                          })

                        .filter((image) => {
                            if (!this.state.horns) return true;
                            if (image.horns === +this.state.horns) return true;
                            return false;
                          })

                        .filter((image) => {
                            if (!this.state.real) return true;
                            if (image.real === this.state.real) return true;
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