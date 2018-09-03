import React from 'react';
// import { Field, reduxForm } from 'redux-form';
import './LoginOtpVerify.scss';
import {
    Row, Col,
} from 'react-bootstrap';


export class LoginOtpVerify extends React.Component {
    constructor() {
        super();
        this.state = {
            // recaptchaVerified: false,
        };
    }


    render() {
        const { nextPage } = this.props;
        
        return (
            <div className="containInnerWrap">
               3rd page
            </div>
        );
    }
}
export default LoginOtpVerify;
