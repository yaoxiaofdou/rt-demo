/*
 *
 *     xiaofeng.yao     2016.8.8     FormInput
 *
 */
import React from 'react';

export default class FormInput extends React.Component {
    handleclick() {
        var value = this.refs.inputid;
        console.log(value)
    }
    render() {
        return (
            <div>
                <input type="text" value="这是个输" ref='inputid' onClick={this.handleclick.bind(this)}/>
                <input type="text" value="这是个输入狂"/>
                <input type="text" value="这是个输入狂"/>
            </div>
        )
    }
}