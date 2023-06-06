import { render, fireEvent } from "react-native-testing-library";
import Signup from "../screens/Signup";
import React from "react";

import { auth } from "../config/firabase.js";
const backImage = require("../assets/niebieskie-tlo-grunge-tekstury.avif");
jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest.fn(),
}));
jest.mock("react-native", () => ({
  StyleSheet: jest.fn(),
  Text: jest.fn(),
  View: jest.fn(),
  Button: jest.fn(),
  TextInput: jest.fn(),
  Image: jest.fn(),
  SafeAreaView: jest.fn(),
  TouchableOpacity: jest.fn(),
  StatusBar: jest.fn(),
  Alert: jest.fn(),
}));
jest.mock("expo-constants", () => ({
  Constants: jest.fn(),
}));
jest.mock("babel.congif.js", () => ({
  extra: jest.fn(),
}));
describe("Signup", () => {
  test("should call onHandleSignup when the button is clicked", () => {
    const onHandleSignupMock = jest.fn();
    const { getByTestId } = render(
      <Signup onHandleSignup={onHandleSignupMock} />
    );

    const signupButton = getByTestId("signup-button");
    fireEvent.press(signupButton);

    expect(onHandleSignupMock).toHaveBeenCalled();
  });
});
