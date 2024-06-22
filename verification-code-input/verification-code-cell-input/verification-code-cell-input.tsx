import React from "react";
import {Cursor} from "./cursor/cursor";
import VerificationCodeCellProps from "./interfaces";
import Styles from "./verification-code-cell-input.styles";
import {Text, View} from "react-native";

const VerificationCodeCellInput = ({
  numOfCells = 4,
  containerStyle,
  textStyle,
  errorTextStyle,
  errorContainerStyle,
  isSecure = false,
  ...props
}: VerificationCodeCellProps) => {
  return (
    <View
      onLayout={props.onLayout}
      style={[
        Styles.defaultContainer,
        {...containerStyle},
        !props.isValid
          ? {...Styles.errorContainer, ...errorContainerStyle}
          : {},
        {
          marginHorizontal: 20 / numOfCells,
        },
      ]}
    >
      <Text
        style={[
          Styles.text,
          {...textStyle},
          !props.isValid ? {...Styles.errorText, ...errorTextStyle} : {},
        ]}
      >
        {(props.value ? (isSecure ? "*" : props.value) : null) ||
          (props.isFocused ? <Cursor /> : null)}
      </Text>
    </View>
  );
};

export default VerificationCodeCellInput;
