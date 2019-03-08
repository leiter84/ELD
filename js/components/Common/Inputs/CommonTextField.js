import React from "react";
import { TextField } from "react-native-material-textfield";
import { PropTypes } from "prop-types";

const CommonTextField = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false
}) => (
  <TextField
    label={label}
    labelFontSize={16}
    labelPadding={6}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
  />
);

CommonTextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool
};

export default CommonTextField;
