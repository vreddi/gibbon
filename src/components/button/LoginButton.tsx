import React from 'react';
import './LoginButton.scss';
import Props from './LoginButton.props';

const LoginButton = (props: Props) => (
  <button className="gibbon-button">
    <img className="gibbon-button-logo" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/direct-hit_1f3af.png"/>
    <span className="gibbon-button-label">&nbsp;&nbsp;Login with account</span>
  </button>
);

export default LoginButton;
