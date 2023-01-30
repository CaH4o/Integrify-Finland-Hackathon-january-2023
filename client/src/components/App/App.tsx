import "./_App.scss";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import Auth from "../../pages/Auth";
import Dashboard from "../../pages/Dashboard";
import Settings from "../../pages/Settings";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default App;
