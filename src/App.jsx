import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";

import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
            <Routes>
              <Route to="/" element={<Dashboard />} />
              {/* <Route to="/team" element={<Team />} />
              <Route to="/contacts" element={<Contacts />} />
              <Route to="/invoices" element={<Invoices />} />
              <Route to="/form" element={<Form />} />
              <Route to="/bar" element={<Bar />} />
              <Route to="/pie" element={<Pie />} />
              <Route to="/line" element={<Line />} />
              <Route to="/faq" element={<FAQ />} />
              <Route to="/geography" element={<Geography />} />
              <Route to="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
