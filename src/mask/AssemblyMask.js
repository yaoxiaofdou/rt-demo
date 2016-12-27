/*
 *
 *     xiaofeng.yao     2016.8.9     mask
 *
 */
import React from 'react';
import 'css/mask.less';

export default class AssemblyMask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BlackMaskDisplay: false,
            BlueMaskDisplay: false,
        };
    }
    blackMaskBtn() {
        this.setState({
            BlackMaskDisplay: !this.state.BlackMaskDisplay,
        })
    }
    blueMaskBtn() {
        this.setState({
            BlueMaskDisplay: !this.state.BlueMaskDisplay,
        })
    }
    render() {
        var BlackMaskStyle = {
            display: this.state.BlackMaskDisplay ? "block" : "none",
        }
        var BlueMaskStyle = {
            display: this.state.BlueMaskDisplay ? "block" : "none",
        }
        return (
            <div>
                <input onClick={this.blackMaskBtn.bind(this)} type={this.props.blackMask.type} className={this.props.blackMask.className} value={this.props.blackMask.value}/>
                <input onClick={this.blueMaskBtn.bind(this)} type={this.props.blueMask.type} className={this.props.blueMask.className} value={this.props.blueMask.value}/>
            
                <div style={BlackMaskStyle} onClick={this.blackMaskBtn.bind(this)} className={this.props.blackMask.MaskBackground}></div>
                <div style={BlueMaskStyle} onClick={this.blueMaskBtn.bind(this)} className={this.props.blueMask.MaskBackground}></div> 
            </div>
        );
    }
}

AssemblyMask.defaultProps = {
    blackMask: {
        type: 'button',
        value: '弹出黑色遮罩',
        className: 'Assembly-blackMask',
        MaskBackground: 'Mask-black-Background'
    },
    blueMask: {
        type: 'button',
        value: '弹出蓝色遮罩',
        className: 'Assembly-blueMask',
        MaskBackground: 'Mask-blue-Background'
    },
}