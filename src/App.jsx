import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from "./Components/HomePage";
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AboutPage from "./Components/Aboutpage"; // adjust path if needed


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


            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
