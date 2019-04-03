import React from 'react';
const logo  = require('../../assets/logo-sf-small.png');

const Header = (props) => (
  <div className="header">
      <img id="header__logo" src={logo} alt="logo" />
      <div className="header__viewer">{props.viewer}</div>
  </div>
);

export default Header;
