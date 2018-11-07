import React from 'react';
import PropTypes from 'prop-types';

const MainHeader = ({ section }) => (
  <div className="mainHeader-style">
    <h2 className="mainHeader">{section}</h2>
  </div>
);

MainHeader.propTypes = {
  section: PropTypes.string.isRequired,
};
export default MainHeader;
