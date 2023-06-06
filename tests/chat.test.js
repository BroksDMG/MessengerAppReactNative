import React from "react";
const { fireEvent, render } = require("react-native-testing-library");
import Chat from "../screens/Chat";

describe("Chat", () => {
  test("should add a new message when sending a message", () => {
    const { getByTestId, getByText } = render(<Chat />);

    const input = getByTestId("message-input");
    fireEvent.changeText(input, "Hello, world!");
    fireEvent(getByTestId("send-button"), "press");

    const messageText = getByText("Hello, world!");
    expect(messageText).toBeTruthy();
  });

  test("should clear the input field after sending a message", () => {
    const { getByTestId } = render(<Chat />);

    const input = getByTestId("message-input");
    fireEvent.changeText(input, "Hello, world!");
    fireEvent(getByTestId("send-button"), "press");

    expect(input.props.value).toBe("");
  });
});
