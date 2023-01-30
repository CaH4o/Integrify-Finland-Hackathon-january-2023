import React, { Route, Routes } from "react-router-dom";

import "./_App.scss";
import Auth from "../../pages/Auth/Auth";
import AppContent from "../AppContent/AppContent";
import Dashboard from "../../pages/Dashboard";
import SettingsPage from "../../pages/Settings";
import NotFound from "../../pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<AppContent />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
