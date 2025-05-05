import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/mui";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { FindBuddy } from "./pages/FindBuddy";
import { LocalGuide } from "./pages/LocalGuide";
import { Events } from "./pages/Events";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="find" element={<FindBuddy />} />
            <Route path="guide" element={<LocalGuide />} />
            <Route path="events" element={<Events />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
