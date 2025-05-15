import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BisbenOzger from "./components/MainHomePage.jsx";
import MainContent from "./components/MainSaleBookPage.jsx";
import Ai from "./components/MainAiPage.jsx";
import Login from "./components/Login.jsx";
import "./App.css";
import { useAuth } from "./context/AuthContext";
import About from "./components/About.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import Planner from "./components/Planer.jsx";
import LogicGames from "./components/LogicGames.jsx";
import LifestylePage from "./components/PagnitationPage.jsx"
function App() {
  const { user } = useAuth();

  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} /> {/* Always show Login first */}
          <Route
            path="/home"
            element={user ? <BisbenOzger /> : <Navigate to="/" />}
          />
          <Route
            path="/about"
            element={user ? <About /> : <Navigate to="/" />}
          />
          <Route
            path="/book"
            element={user ? <MainContent /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={user ? <ProfilePage /> : <Navigate to="/" />}
          />
          <Route
            path="/lifestyle"
            element={user ? <LifestylePage /> : <Navigate to="/" />}
          />
          <Route
            path="/planner"
            element={user ? <Planner /> : <Navigate to="/" />}
          />
          <Route
            path="/logicGames"
            element={user ? <LogicGames /> : <Navigate to="/" />}
          />
          <Route path="/ai" element={user ? <Ai /> : <Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
