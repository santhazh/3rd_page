import React from 'react';
import { Grid } from 'react-bootstrap';
import './GovtStyle.scss';
import GovtBusinessInfo from './GovtBusinessInfo/GovtBusinessInfo';
import GovtShoppingPreference from './GovtShoppingPreference/GovtShoppingPreference';
import LoginOtpVerify from './LoginOtpVerify/LoginOtpVerify';
import history from '../../history';

const steps = [{ id: 0 }, { id: 1 }, { id: 2 }];
class Govt extends React.Component {
    constructor() {
        super();
        this.state = ({ currentStep: steps[0] });
    }

  nextPage = () => {
      const { currentStep } = this.state;
      this.setState({ currentStep: steps[currentStep.id + 1] });
  }

  previousPage = () => {
      const { currentStep } = this.state;
      this.setState({ currentStep: steps[currentStep.id - 1] });
  }

  onSubmit = (values) => {
      history.push('./home');
      console.log('final submit', values);
  }

  closeModel = () => {
      history.push('./home');
  }

  render() {
      const { currentStep } = this.state;
      return (
          <Grid fluid >
              <div className="container">
                  {currentStep.id === 0
                  && (
                      <GovtBusinessInfo
                          onSubmit={this.nextPage}/>
                  )}
                  {currentStep.id === 1
                    && (
                        <GovtShoppingPreference
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage} />
                    )}
                  {currentStep.id === 2
                    && (
                        <LoginOtpVerify
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage} />
                    )}
              </div>
          </Grid>
      );
  }
}

export default Govt;
