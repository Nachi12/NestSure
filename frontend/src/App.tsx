import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/landing/Hero";
import Services from "./components/landing/Services";
import HowItWorks from "./components/landing/HowItWorks";
import Testimonials from "./components/landing/Testimonials";
import TrustSection from "./components/landing/TrustSection";
import CTA from "./components/landing/CTA";

import ServiceDetails from "./components/service/ServiceDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


// ======================================================
// HOME PAGE
// ======================================================

const HomePage = () => {
  return (
    <div className="overflow-x-hidden bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="scroll-mt-24"
      >
        <Hero />
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="scroll-mt-24"
      >
        <Services />
      </section>

      {/* HOW IT WORKS SECTION */}
      <section
        id="how-it-works"
        className="scroll-mt-24"
      >
        <HowItWorks />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        id="testimonials"
        className="scroll-mt-24"
      >
        <Testimonials />
      </section>

      {/* TRUST SECTION */}
      <section
        id="trust"
        className="scroll-mt-24"
      >
        <TrustSection />
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24"
      >
        <CTA />
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};


// ======================================================
// APP ROUTER
// ======================================================

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* DYNAMIC SERVICE PAGE */}
        <Route
          path="/service/:slug"
          element={<ServiceDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
