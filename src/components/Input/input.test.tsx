import { render, screen } from "@testing-library/react-native";
import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("Should be render without activity indicator is isLoading prop is undefined", () => {
    const { debug } = render(<Input />);
    // debug();

    //! getByTestId will return a exception when null
    // const activityIndicator = screen.getByTestId("activity-indicator");

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });
  it("Should be render without activity indicator is isLoading prop is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");

    expect(activityIndicator).toBeTruthy();
  });
});
