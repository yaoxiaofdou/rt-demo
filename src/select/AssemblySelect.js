/*
 *
 *     xiaofeng.yao     2016.8.9     select
 *
 */
import React from 'react';
import 'css/select.less';
import $ from 'jquery';
import SelectControl from 'select/SelectControl.js';
import OrdinarySelect from 'select/OrdinarySelect.js';
import ThreeDSelect from 'select/threeDSelect.js';

export default class AssemblySelect extends React.Component {
    render() {
        return (
            <div>
                <OrdinarySelect selectItems = {this.props.selectItems}/>
                <ThreeDSelect selectItems = {this.props.selectItems}/>
            </div>
        )
    }
}

AssemblySelect.defaultProps = {
    selectItems: [
        '天猫', '淘宝', '美团', '美图', '京东', '4399', '启尚', '顺丰', '圆通'
    ],
}