import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";

import { CityProvider } from "@contexts/CityContext";

function Providers({ children }: { children: ReactNode }) {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  return (
    //! NOTE: The SafeAreaProvider need the parameters initialMetrics or will not work properly
    <SafeAreaProvider initialMetrics={inset}>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export { customRender as render, Providers };
export * from "@testing-library/react-native";
