import React, { Component } from 'react';

import './Landing.scss';
import LoginButton from '../button/LoginButton';

class Landing extends Component {
  getAnimatedLogo(): JSX.Element {
    return (
      <div className="stage">
        <div className="wrapper">
            <div className="slash"></div>
            <div className="sides">
                <div className="side"></div>
                <div className="side"></div>
                <div className="side"></div>
                <div className="side"></div>
            </div>
            <div className="text">
                <div className="text--backing">lomba</div>
                <div className="text--left">
                    <div className="inner">lomba</div>
                </div>
                <div className="text--right">
                    <div className="inner">lomba</div>
                </div>
            </div>
        </div>
    </div>
    );
  }

  getBubbles(): JSX.Element {
    return (
      <ul className="gibbon-Bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  }

  getModal() {
    return (
      <div className="ui basic modal">
        <div className="ui icon header">
          <i className="archive icon"></i>
          Archive Old Messages
        </div>
        <div className="content">
          <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
        </div>
        <div className="actions">
          <div className="ui red basic cancel inverted button">
            <i className="remove icon"></i>
            No
          </div>
          <div className="ui green ok inverted button">
            <i className="checkmark icon"></i>
            Yes
          </div>
        </div>
      </div>
    );
  }

  getButtonContainer() {
    return (
      <div className="gibbon-LandingAuthContainer">
        <div className="gibbon-LandingButtonContainer">
          <LoginButton label="Login" />
          <div
            className="fb-login-button"
            data-size="large"
            data-button-type="continue_with"
            data-layout="rounded"
            data-auto-logout-link="false"
            data-use-continue-as="false"
            data-width="">
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="gibbon-Landing">
        <div className="gibbon-Landing-Logo">
          {this.getAnimatedLogo()}
        </div>
        {this.getButtonContainer()}
        {this.getBubbles()}
        {this.getModal()}
      </div>
    );
  }
}

export default Landing;
