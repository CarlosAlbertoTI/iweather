import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
import { mockCityApiResponse } from "@__tests__/mocks/mockCityApiResponse";

describe("API: getCityByNameService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });
    const response = await getCityByNameService("Fortaleza");
    expect(response.length).toBeGreaterThan(0);
  });
});
