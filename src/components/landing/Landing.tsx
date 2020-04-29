import React, { Component } from 'react';

import './Landing.scss';

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

  render() {
    return (
      <div className="gibbon-Landing">
        <div className="gibbon-Landing-Logo">
          {this.getAnimatedLogo()}
        </div>
        <div className="gibbon-Landing-AuthContainer">
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
      </div>
    );
  }
}

export default Landing;
