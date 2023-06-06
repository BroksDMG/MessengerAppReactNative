import React from "react";
import { render } from "react-native-testing-library";
import "@testing-library/jest-native/extend-expect";
import Home from "../screens/Home";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
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
jest.mock("@expo/vector-icons", () => ({
  FontAwesome: jest.fn(),
  Entypo: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));
describe("Home component", () => {
  it("should render FontAwesome and Entypo icons", () => {
    const { getByType } = render(<Home />);

    // Sprawdzenie wyświetlania ikony FontAwesome
    const fontAwesomeIcon = getByType(FontAwesome);
    expect(fontAwesomeIcon.props.name).toEqual("search");

    // Sprawdzenie wyświetlania ikony Entypo
    const entypoIcon = getByType(Entypo);
    expect(entypoIcon.props.name).toEqual("chat");
  });
});
