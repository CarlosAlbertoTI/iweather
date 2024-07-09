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

    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />);

    // const selectedCity = screen.getByText(data[0].name);
    // const selectedCity = screen.getByText(/sobral/i);
    const selectedCity = screen.getByText("Sobral", { exact: false });
    fireEvent.press(selectedCity);
  });
});
