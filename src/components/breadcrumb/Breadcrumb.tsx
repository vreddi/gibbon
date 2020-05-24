import React from 'react';

import './Breadcrumb.scss';

const Breadcrumb = () => (
  <div className="ui breadcrumb gibbon-breadcrumb">
    <a className="section">Home</a>
    <i className="right angle icon divider"></i>
    <a className="section">Store</a>
    <i className="right angle icon divider"></i>
    <div className="active section">T-Shirt</div>
  </div>
);

export default Breadcrumb;
