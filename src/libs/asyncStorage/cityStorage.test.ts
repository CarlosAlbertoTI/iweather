import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: "1",
  name: "San Francisco",
  latitude: 123,
  longitude: 180,
};

describe("Storage: CityStorage", () => {
  it("Should be return null when don't have a city storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("Should be returning city storage", async () => {
    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("Should be removing city storage", async () => {
    await saveStorageCity(newCity);

    await removeStorageCity()
    const response = await getStorageCity()

    expect(response).toBeNull()
  });
});
