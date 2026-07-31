import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import router from "./router";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { COLORS } from "./theme";

function AppContent() {
  const { theme: mode } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          fontFamily: '"Inter", "Segoe UI", Roboto, Arial, sans-serif',
          colorPrimary: COLORS.primary,
        },
        components: {
          Menu: {
            itemSelectedBg: COLORS.primaryLight,
            itemSelectedColor: COLORS.primary,
            itemHoverColor: COLORS.primary,
            itemHoverBg: COLORS.primaryLight,
            itemActiveBg: COLORS.primaryLight,
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
