const { fireEvent, render } = require("react-native-testing-library");
const { signInWithEmailAndPassword } = require("firebase/auth");
import Login from "./screens/login";

jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn().mockResolvedValue({}),
}));

describe("Login", () => {
  it("should log in with correct credentials", async () => {
    const mockEmail = "test@example.com";
    const mockPassword = "password";

    const { getByPlaceholder } = render(<Login />);

    const emailInput = getByPlaceholder("Enter email");
    const passwordInput = getByPlaceholder("Enter password");

    fireEvent.changeText(emailInput, mockEmail);
    fireEvent.changeText(passwordInput, mockPassword);

    await fireEvent.press(getByText("Log In"));

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      expect.anything(),
      mockEmail,
      mockPassword
    );
  });
});
