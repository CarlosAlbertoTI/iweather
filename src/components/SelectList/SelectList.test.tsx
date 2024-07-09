import { screen, render, fireEvent } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("Should be return city details selected", () => {
    const data = [
      {
        id: "1",
        name: "Fortaleza",
        longitude: 123,
        latitude: 123,
      },
      {
        id: "2",
        name: "Sobral 123",
        longitude: 133,
        latitude: 133,
      },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    // const selectedCity = screen.getByText(data[0].name);
    // const selectedCity = screen.getByText(/sobral/i);
    const selectedCity = screen.getByText("Sobral", { exact: false });

    fireEvent.press(selectedCity);

    // expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith(data[1]);
  });

  it("Should not show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
