import { render, screen, waitFor } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { Routes } from "@routes/index";

describe("Routes", () => {
  it("Should be render Search screen when not city selected", async () => {
    render(<Routes />);
    
    const title = await waitFor(() => screen.findByText(/^escolha um local/i), { timeout: 5000 }); // Aumentando o tempo de espera para 5 segundos

    expect(title).toBeTruthy();
  });

  it("Should be render Dashboard screen when city is selected", async () => {
    const newCity = {
      id: "1",
      name: "Fortaleza",
      latitude: 123,
      longitude: 345,
    };
    await saveStorageCity(newCity);

    const { debug } = render(<Routes />);

    // Adicione um tempo de espera para garantir que a cidade foi salva antes da renderização
    await waitFor(() => screen.findByText(newCity.name));

    debug();
  });
});