import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartView from "./views/StartView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<StartView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
