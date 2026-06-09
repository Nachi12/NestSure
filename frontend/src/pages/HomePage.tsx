import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";

import Hero from "../components/landing/Hero";

import Services from "../components/landing/Services";

import HowItWorks from "../components/landing/HowItWorks";

import Testimonials from "../components/landing/Testimonials";

import TrustSection from "../components/landing/TrustSection";

import CTA from "../components/landing/CTA";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-24"
      >
        <Hero />
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-24"
      >
        <Services />
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-24"
      >
        <HowItWorks />
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="scroll-mt-24"
      >
        <Testimonials />
      </section>

      {/* TRUST */}
      <section
        id="trust"
        className="scroll-mt-24"
      >
        <TrustSection />
      </section>

      {/* CTA */}
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

export default HomePage;