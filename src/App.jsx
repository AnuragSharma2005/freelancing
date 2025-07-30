import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Components/HomePage";
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AboutPage from "./Components/Aboutpage"; // adjust path if needed
import Recommendations from "./Components/Recommendations";
import Workshop  from "./Components/Workshop";
import Brands from "./Components/Brands";
import Events from "./Components/Events";

function App() {
  return (
    <Router> {/* 👈 Fix applied here */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <About />
              </>
            } />
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
