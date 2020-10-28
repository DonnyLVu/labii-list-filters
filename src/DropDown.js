import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <div className="drop-down" >
            <select onChange={this.props.handleChange}>
                <option value=''>Show All Types</option>
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

            <select onChange={this.props.handleChangeHorns}>
                <option value=''>Show All Horns</option>
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
)}}