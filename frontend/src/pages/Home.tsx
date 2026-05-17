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
      <section id="home">
        <Hero />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* TRUST */}
      <section id="trust">
        <TrustSection />
      </section>

      {/* CTA */}
      <section id="contact">
        <CTA />
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default HomePage;
