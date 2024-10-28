import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@__tests__/utils/customRender";
import { Search } from "@screens/Search";
import { api } from "@services/api";

describe("Screen:", () => {
  it("should be show city option.", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });

    const { debug } = render(<Search />);

    const searchInput = await screen.findByTestId("search-input");

    fireEvent.changeText(searchInput, "Fortaleza");

    const option = await waitFor(() => screen.findByText(/Fortaleza/i));
    debug();
    expect(option).toBeTruthy();
  });
});
