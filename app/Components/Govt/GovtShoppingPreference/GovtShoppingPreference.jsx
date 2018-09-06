import React from 'react';
// import { Field, reduxForm } from 'redux-form';
import './GovtShoppingPreference.scss';
import {
    Row, Col,
} from 'react-bootstrap';

/* eslint-disable react/prop-types */
export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            // recaptchaVerified: false,
        };
    }


    render() {
        const { nextPage, handleSubmit } = this.props;
        return (
            <div className="containInnerWrap">
                <div className="loginBoxWrap">
                    <div className="loginBox">
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col className="otpFirst" sm={12} lg={12}>
                                To help us verify identity and protect your private information, a
                                confirmation code will be sent to your phone or email.
                                </Col >
                            </Row>
                            <Row>
                                <Col sm={12} lg={12}>
                                Send the code:
                                </Col>
                                <Col sm={12} lg={12}>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="optradio" checked/>

To my phone via text message or voice call
                                            {' '}
                                            <div className="sendcode">send code to :</div>
                                            <div>send code via</div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optradio" checked/>
Text message (message and data rates may apply)
                                                </label>

                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optradio"/>
Voice call
                                                </label>
                                            </div>
                                        </label>

                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="optradio"/>
To my email address at something@gmail.com
                                        </label>
                                    </div>

                                </Col>
                            </Row>
                            <Row>
                                <Col className="otpFirst" sm={12} lg={12}>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btnSignIn"
                                            onClick={nextPage}
                                        >
Send confirmation Code
                                        </button>
                                    </div>
                                </Col >
                            </Row>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
