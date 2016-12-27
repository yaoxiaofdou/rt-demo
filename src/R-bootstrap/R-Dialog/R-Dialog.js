/*
 *
 *     xiaofeng.yao     2016.9.2     R-bootstrap dialog
 *
 */
import React from 'react';
import {
    Modal,
    Button,
    Popover,
    ButtonToolbar,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';

export default class reactbootstrapdialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }
    close() {
        this.setState({
            showModal: false
        });
    }

    open() {
        this.setState({
            showModal: true
        });
    }
    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        )
        const tooltip = (
            <Tooltip id="modal-tooltip">
                www.wowchina.com
            </Tooltip>
        )
        const popoverLeft = (
            <Popover id="popover-positioned-left" title="Popover left">
                <strong>Holy guacamole!</strong> Check this info.
            </Popover>
        )

        const popoverTop = (
            <Popover id="popover-positioned-top" title="Popover top">
                <strong>Holy guacamole!</strong> Check this info.
            </Popover>
        )

        const popoverBottom = (
            <Popover id="popover-positioned-bottom" title="Popover bottom">
                <strong>Holy guacamole!</strong> Check this info.
            </Popover>
        )

        const popoverRight = (
            <Popover id="popover-positioned-right" title="Popover right">
                <strong>Holy guacamole!</strong> Check this info.
            </Popover>
        )

        return (
            <div>
                <h3>点击弹出 Modal</h3>

                <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)}>
                    click me
                </Button>

                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <h3> 划过显示Tooltips </h3>

                <ButtonToolbar>
                    <OverlayTrigger placement="left" overlay={tooltip}>
                      <Button bsStyle="default">Holy guacamole!</Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={tooltip}>
                      <Button bsStyle="default">Holy guacamole!</Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                      <Button bsStyle="default">Holy guacamole!</Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={tooltip}>
                      <Button bsStyle="default">Holy guacamole!</Button>
                    </OverlayTrigger>
                </ButtonToolbar>

                <h3> click me</h3>
                
                <ButtonToolbar>
                    <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                      <Button>Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                      <Button>Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                      <Button>Holy guacamole!</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                      <Button>Holy guacamole!</Button>
                    </OverlayTrigger>
                </ButtonToolbar>
                
            </div>
        )
    }
}

///设置默认属性
reactbootstrapdialog.defaultProps = {
    showModal: false
};