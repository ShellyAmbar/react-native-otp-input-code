import React, {useState, Ref, forwardRef} from "react";
import CodeField from "./code-field/code-field";
import {useClearByFocusCell} from "./code-field/hooks/useClearByFocusCell";
import VerificationCodeInputProps from "./interfaces";
import VerificationCodeCellInput from "./verification-code-cell-input/verification-code-cell-input";
import Styles from "./verification-code-input.styles";
import {CellInputType} from "./verification-code-cell-input/interfaces";
import {TextInput} from "react-native";
const VerificationCodeInput = forwardRef(
  (
    {
      isSecure = false,
      isValid = true,
      isSuccess = false,
      cellCount = 4,
      onComplete,
      onChangeText,
      ...props
    }: VerificationCodeInputProps,
    ref: Ref<TextInput>
  ) => {
    const [value, setValue] = useState("");

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
          if (val.length === cellCount) {
            onComplete(val);
          }
          onChangeText(val);
          setValue(val);
        }}
        cellCount={cellCount}
        rootStyle={Styles.codeFiledRoot}
        renderCell={({index, symbol, isFocused}) => (
          <VerificationCodeCellInput
            isSecure={isSecure}
            numOfCells={cellCount}
            key={index}
            onLayout={getCellOnLayoutHandler(index)}
            isFocused={isFocused}
            status={
              isSuccess
                ? CellInputType.correct
                : isValid
                ? CellInputType.default
                : CellInputType.error
            }
            value={symbol.toString()}
            textStyle={props.textStyle}
            containerStyle={props.containerStyle}
            errorTextStyle={props.errorTextStyle}
            errorContainerStyle={props.errorContainerStyle}
          />
        )}
        {...props}
      />
    );
  }
);

export default VerificationCodeInput;
