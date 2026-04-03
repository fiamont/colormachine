import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartView from "./views/StartView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
