import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, className, value }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string
};

export default Button;
