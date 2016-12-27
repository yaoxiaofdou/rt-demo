/*
 *
 *     xiaofeng.yao     2016.8.12     form
 *
 */
import React from 'react';
import 'css/form.less';
import FormControl from 'form/FormControl.js';

export default class AssemblyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            intro: this.props.intro,
            city: this.props.city,
            male: this.props.male,
            emailError: this.props.emailError,
            introError: this.props.introError,
            open: true
        };
    }
    handleEmail(e) {
        var value = e.target.value;
        var error = '';
        if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
            error = '请输入正确的Email';
        }
        this.setState({
            email: value,
            emailError: error
        });
    }
    handleIntro(e) {
        var value = e.target.value;
        var error = "";
        if (value.length < 10) {
            error = "介绍不能少于十个字";
        }
        this.setState({
            intro: value,
            introError: error
        });
    }
    handleCity(e) {
        var value = e.target.value;
        this.setState({
            city: value,
        });
    }
    handleGender(e) {
        var male = !!(e.target.value == 'MALE');
        this.setState({
            male: male
        });
    }
    render() {
        return (
            <div>
                <p>
                    <label htmlFor='email'>email:</label>
                    <input type='text' name='intro' id='intro' value={this.state.email} onChange={this.handleEmail.bind(this)} />
                    <span>{this.state.emailError}</span>
                </p>
                <p>
                    <label htmlFor='intro'>intro:</label>
                    <textarea type='text' name='intro' id='intro' value={this.state.intro} onChange={this.handleIntro.bind(this)} />
                    <span>{this.state.introError}</span>
                </p>
                <p>
                    <label htmlFor='city'>所在城市:</label>
                    <select  name='city' id='city' value={this.state.city} onChange={this.handleCity.bind(this)}>
                        <option value='hz'>杭州</option>
                        <option value='bj'>北京</option>
                        <option value='sh'>上海</option>
                    </select>
                </p>
                <p>
                    <label>性别:</label>
                    <input type='radio' name='gender' checked={this.state.male} onChange={this.handleGender.bind(this)} value='MALE' />
                    <input type='radio' name='gender' checked={!this.state.male} onChange={this.handleGender.bind(this)} value='FEMALE' />
                </p>
            </div>
        )
    }
}

AssemblyForm.defaultProps = {
    email: "",
    intro: "",
    city: "hz",
    male: true,
    emailError: "",
    introError: ""
}