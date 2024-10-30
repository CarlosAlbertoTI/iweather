import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { render, screen, waitFor } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { Dashboard } from "@screens/Dashboard";
import { api } from "@services/api";

describe("Screen: Dashboard", () => {
  it("should be show city weather", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "Rio do Sul",
      latitude: 123,
      longitude: 123,
    };

    await saveStorageCity(city);

    const { debug } = render(<Dashboard />);

    const cityName = await waitFor(() => screen.getByText(city.name));
    debug();
    expect(cityName).toBeTruthy();
  });

  it("should be show another selected weather city", async () => {

    const city = {
        id: "1",
        name: "Rio do Sul",
        latitude: 123,
        longitude: 123,
      };
  
      await saveStorageCity(city);

      /**
       * 1. Busca as informacoes do tempo/clima da cidade selecionada
       * 2. Busca as informacoes da cidade
       * 3. Busca as informacoes do tempo/clima da nova cidade selecionada
       */
      
      jest.spyOn(api, "get")
        .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
        .mockResolvedValueOnce({ data: mockCityApiResponse })
        .mockResolvedValueOnce({ data: mockWeatherAPIResponse });
  }
)
});
