import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
// import Anchor from "./Components/Anchor";
import About from './Components/About';
import EventSlider from "./Components/EventSlider";
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AboutPage from "./Components/Aboutpage";
import Recommendations from "./Components/Recommendations";
import Workshop from "./Components/Workshop";
import Brands from "./Components/Brands";
import Events from "./Components/Events";
import ScrollToTop from './Components/ScrollToTop';
import Banner from "./Components/Banner";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><HomePage /><About /><EventSlider /><Banner /></>} />
            {/* <Route path="/anchor" element={<Anchor />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutpage" element={<AboutPage />} />
            
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
