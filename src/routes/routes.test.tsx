import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { act, render, screen, waitFor } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { Routes } from "@routes/index";
import { api } from "@services/api";

describe("Routes", () => {
  it("Should be render Search screen when not city selected", async () => {
    const { debug } = render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i)); // Aumentando o tempo de espera para 5 segundos

    expect(title).toBeTruthy();
  });

  it("Should be render Dashboard screen when city is selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const newCity = {
      id: "1",
      name: "São Paulo",
      latitude: 123,
      longitude: 345,
    };
    await saveStorageCity(newCity);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(newCity.name);
    expect(title).toBeTruthy();

    // Adicione um tempo de espera para garantir que a cidade foi salva antes da renderização
    // await waitFor(() => screen.findByText(newCity.name));
  });
});
