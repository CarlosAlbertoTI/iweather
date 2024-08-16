import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "@contexts/CityContext";

describe("Context: CityContext", () => {
  it("Should be change selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });
    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "Fortaleza",
          latitude: 123,
          longitude: 453,
        })
      )
    );

    expect(result.current.city?.name).toBe("Fortaleza");
  });
});
