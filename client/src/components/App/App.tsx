import "./_App.scss";
import { Route, Routes } from "react-router-dom";
import React from 'react';
import AppContent from "../AppContent/AppContent";
import Auth from "../../pages/Auth";
import Dashboard from "../../pages/Dashboard";
import SettingsPage from "../../pages/Settings";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<AppContent/>}>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/settings" element={<SettingsPage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
