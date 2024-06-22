import {TextStyle, ViewStyle} from "react-native";

export default interface VerificationCodeInputProps {
  isValid: boolean;
  onComplete: (val: string) => void;
  onChangeText: (val: string) => void;
  uppercase?: boolean;
  keyboardType: KeyboardType;
  cellCount: number;
  textContentType: textInputContentType;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  errorTextStyle?: TextStyle;
  errorContainerStyle?: ViewStyle;
}

export enum KeyboardType {
  default = "default",
  number_pad = "number-pad",
  decimal_pad = "decimal-pad",
  numeric = "numeric",
  phone_pad = "phone-pad",
}

type textInputContentType =
  | "none"
  | "URL"
  | "addressCity"
  | "addressCityAndState"
  | "addressState"
  | "countryName"
  | "creditCardNumber"
  | "emailAddress"
  | "familyName"
  | "fullStreetAddress"
  | "givenName"
  | "jobTitle"
  | "location"
  | "middleName"
  | "name"
  | "namePrefix"
  | "nameSuffix"
  | "nickname"
  | "organizationName"
  | "postalCode"
  | "streetAddressLine1"
  | "streetAddressLine2"
  | "sublocality"
  | "telephoneNumber"
  | "username"
  | "password"
  | "newPassword"
  | "oneTimeCode"
  | undefined;
