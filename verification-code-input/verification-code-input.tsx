import React, {useState} from "react";
import CodeField from "./code-field/code-field";
import {useBlurOnFulfill} from "./code-field/hooks/useBlurOnFulfill";
import {useClearByFocusCell} from "./code-field/hooks/useClearByFocusCell";
import VerificationCodeInputProps from "./interfaces";
import VerificationCodeCellInput from "./verification-code-cell-input/verification-code-cell-input";
import Styles from "./verification-code-input.styles";

const VerificationCodeInput = (props: VerificationCodeInputProps) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({value, cellCount: props.cellCount});
  const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...cellProps}
      value={value}
      onChangeText={(val) => {
        if (val.length === props.cellCount) {
          props.onComplete(val);
        }
        props.onChangeText(val);
        setValue(val);
      }}
      cellCount={props.cellCount}
      rootStyle={Styles.codeFiledRoot}
      keyboardType={props.keyboardType}
      textContentType={props.textContentType}
      renderCell={({index, symbol, isFocused}) => (
        <VerificationCodeCellInput
          isSecure={props.isSecure}
          numOfCells={props.cellCount}
          key={index}
          onLayout={getCellOnLayoutHandler(index)}
          isFocused={isFocused}
          isValid={props.isValid}
          value={symbol.toString()}
          textStyle={props.textStyle}
          containerStyle={props.containerStyle}
          errorTextStyle={props.errorTextStyle}
          errorContainerStyle={props.errorContainerStyle}
        />
      )}
    />
  );
};

export default VerificationCodeInput;
