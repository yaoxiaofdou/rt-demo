/*
 *
 *     xiaofeng.yao     2016.8.8     main nav
 *
 */

import React from 'react';
import 'css/mainnav.less';
import NavList from 'mainnav/navlist.js';

export default class MainNav extends React.Component {
    render() {
        return (
            <div className="Assembly-MainNav">
                <div className='Assembly-Title'>
                    <h5>{this.props.title}</h5>
                </div>
                <NavList ComponentList={this.props.ComponentList}
                         RbootstrapList={this.props.RbootstrapList}/>
            </div>
        )
    }
}

MainNav.defaultProps = {
    title: 'Assembly && bootstrap',
    ComponentList: [{
        name: 'Mask',
        icon: 'iconfont icon-zhezhao'
    }, {
        name: 'Select',
        icon: 'iconfont icon-select'
    }, {
        name: 'Tab',
        icon: 'iconfont icon-tabedittab'
    }, {
        name: 'Switch',
        icon: 'iconfont icon-switch'
    }, {
        name: 'Navigation',
        icon: 'iconfont icon-yaonavigation'
    }, {
        name: 'Carousel',
        icon: 'iconfont icon-viewcarousel'
    }, {
        name: 'Form',
        icon: 'iconfont icon-form'
    }, {
        name: 'Popup',
        icon: 'iconfont icon-alert'
    }, {
        name: 'Input',
        icon: 'iconfont icon-input'
    }, {
        name: 'Table',
        icon: 'iconfont icon-table'
    }],
    RbootstrapList: [{
        name: 'RButton',
        icon: 'iconfont icon-button'
    }, {
        name: 'RDialog',
        icon: 'iconfont icon-alert'
    }]
}