import React from 'react';
import Props from './Header.props';

import './Header.scss';

const Header = (props: Props): JSX.Element => (
  <div className="gibbon-header">
    <div className="gibbon-header-breadcrumb">
      {props.breadcrumb}
    </div>
    <div className="gibbon-header-avatar">
      {props.avatar}
    </div>
  </div>
);

export default Header;