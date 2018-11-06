import React from 'react';
import PropTypes from 'prop-types';

const MainHeader = ({ category }) => (
  <div className="mainHeader-style">
    <h2>{category}</h2>
  </div>
);

MainHeader.propTypes = {
  category: PropTypes.string.isRequired,
};
export default MainHeader;
