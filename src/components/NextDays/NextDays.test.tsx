import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("Should be render day", () => {
    render(
      <NextDays
        data={[
          {day: "18/07",min: "30c",max: "34c",icon: clearDay, weather: "Ceu limpo"},
          {day: "19/07",min: "33c",max: "35c",icon: clearDay, weather: "Nublado"},
          {day: "20/07",min: "20c",max: "26c",icon: clearDay, weather: "Chuva Fraca"},
          {day: "21/07",min: "17c",max: "13c",icon: clearDay, weather: "Nublado"},
          {day: "22/07",min: "19c",max: "27c",icon: clearDay, weather: "Ceu limpo"}
        ]}
      />
    );

    expect(screen.getByText('19/07')).toBeTruthy()
  });
});
