/*
 *
 *     xiaofeng.yao     2016.8.8     nav list
 *
 */

import React from 'react';
import {
    Link
} from 'react-router';
import 'css/navlist.less';
import 'css/iconfont.less';
import MainNav from 'mainnav/mainnav.js';
import {
    Button,
    NavDropdown,
    MenuItem,
    Nav
} from 'react-bootstrap';

export default class NavList extends React.Component {
    componentDidMount() {}
    render() {
        // 自制的组件 导航列表
        let ComponentArray = [];
        this.props.ComponentList.forEach(function(item, index) {
            ComponentArray.push(
                <MenuItem key={item.name} eventKey={item.name}>    

                        <Link to={"/"+item.name} className="NavList-link">
                            <i className={item.icon}></i>
                            {item.name}
                        </Link>

                </MenuItem>
            );
        });
        // React-bootstrap 组件列表
        let RbootstrapArray = [];
        this.props.RbootstrapList.forEach(function(item, index) {
            RbootstrapArray.push(
                <MenuItem key={item.name} eventKey={item.name}>    

                        <Link to={"/"+item.name} className="NavList-link">
                            <i className={item.icon}></i>
                            {item.name}
                        </Link>

                </MenuItem>
            );
        });
        return (
            <div>
                <Nav className="ListNav">
                    <NavDropdown className="newnavli" title="Components" id="basic-nav-dropdown">
                        {ComponentArray}
                    </NavDropdown>
                </Nav>
                <Nav className="ListNav">
                    <NavDropdown className="newnavli" title="R-Bootstrap" id="basic-nav-dropdown">                 
                        {RbootstrapArray}                   
                    </NavDropdown>
                </Nav>
            </div>
        )
    }
}