/*
 *
 *     xiaofeng.yao     2016.9.2     react-bootstrap button
 *
 */
import React from 'react';
import {
    ButtonGroup,
    Button,
    ButtonToolbar,
    DropdownButton,
    SplitButton,
    MenuItem
} from 'react-bootstrap';

var BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

// dropdowns map btn
function renderDropdownButton(title, i) {
    return (
        <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
    );
}

// dropdowns map double
function renderDropdownButtonDouble(title, i) {
    return (
        <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>
    );
}

export default class reactbootstrapbutton extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2> R-Button </h2>
                    <Button>默认按钮</Button>
                    
                    <Button bsStyle="primary">原始按钮</Button>
                    
                    <Button bsStyle="success">成功按钮</Button>

                    <Button bsStyle="info">信息按钮</Button>
                    
                    <Button bsStyle="warning">警告按钮</Button>
                    
                    <Button bsStyle="danger">危险按钮</Button>
                    
                    <Button bsStyle="link">链接按钮</Button>
                    
                    <h4>add disabled</h4>  
                    <ButtonToolbar>
                        <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
                        <Button bsSize="large" disabled>Button</Button>
                    </ButtonToolbar>

                    <h4> Sizing </h4>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button>Left</Button>
                            <Button>Middle</Button>
                            <Button>Right</Button>
                        </ButtonGroup>
                    </ButtonToolbar>

                </div>
                <div>

                    <h2> R-Dropdowns </h2>
                    <ButtonToolbar>
                        {BUTTONS.map(renderDropdownButton)}
                    </ButtonToolbar>

                    <h2> R-Dropdowns </h2>
                    <ButtonToolbar>
                        {BUTTONS.map(renderDropdownButtonDouble)}
                    </ButtonToolbar>
                    
                    <h4>Dropup variation</h4>
                    <ButtonToolbar>
                        <SplitButton title="Dropup" dropup id="split-button-dropup">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </SplitButton>
                    </ButtonToolbar>

                    <h4>Nesting</h4>
                    <ButtonGroup>
                        <Button>1</Button>
                        <Button>2</Button>
                        <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <h4>Vertical variation</h4>
                    <ButtonGroup vertical>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
                          <MenuItem eventKey="1">Dropdown link</MenuItem>
                          <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
                          <MenuItem eventKey="1">Dropdown link</MenuItem>
                          <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
                          <MenuItem eventKey="1">Dropdown link</MenuItem>
                          <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                </div>

            </div>
        )
    }
}