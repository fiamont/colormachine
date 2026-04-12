import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartView from "./views/StartView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import TipsView from "./views/TipsView";
import ToolView from "./views/ToolView";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/navigation/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<StartView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/tips" element={<TipsView />} />
          <Route path="/tools" element={<ToolView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
