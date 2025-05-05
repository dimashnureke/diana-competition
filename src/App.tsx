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
          <Route path="/diana-competition/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/diana-competition/find" element={<FindBuddy />} />
            <Route path="/diana-competition/guide" element={<LocalGuide />} />
            <Route path="/diana-competition/events" element={<Events />} />
            <Route path="/diana-competition/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
