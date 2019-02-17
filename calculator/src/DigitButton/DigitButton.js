import Button from "../Button";
import PropTypes from "prop-types";
import { doInputDigit } from "../actionCreators";
import { connect } from "react-redux";
import React from "react";

const DigitButton = ({ className, digit, onClick }) => {
  return (
    <Button
      className={className}
      value={`${digit}`}
      onClick={() => onClick(digit)}
    />
  );
};

DigitButton.propTypes = {
  className: PropTypes.string,
  digit: PropTypes.number,
  onClick: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onClick: digit => dispatch(doInputDigit(digit))
});

export default connect(
  null,
  mapDispatchToProps
)(DigitButton);
