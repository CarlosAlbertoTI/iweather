import { api } from "@services/api";
import { getWeatherByCityService } from "./getWeatherByCityService";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

describe("Service: getWeatherByCityService", () => {
  it("Should be returning weather api data formatted", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const response = await getWeatherByCityService({
      latitude: 12,
      longitude: 122,
    });
    expect(response).toHaveProperty("today");
  });
});
