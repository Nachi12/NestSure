import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  MapPin,
  Phone,
  User,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const ServiceDetails = () => {
  const { slug } = useParams();

  // FIX AUTO SCROLL TO FOOTER
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const serviceName = slug
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    issue: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // BOOK SERVICE
  const handleBooking = async () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.issue
    ) {
      alert("Please fill all fields");

      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5001/api/bookings",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            service: serviceName,
            ...formData,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);

        setFormData({
          name: "",
          phone: "",
          address: "",
          issue: "",
        });

        // REMOVE SUCCESS AFTER 4 SEC
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      } else {
        alert(data.message || "Booking failed");
      }
    } catch (error) {
      console.error(error);

      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">

      {/* NAVBAR */}
      <Navbar />

      <section className="pt-32 pb-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <div>

            {/* TAG */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                bg-white
                border
                border-gray-100
                shadow-sm
              "
            >

              <Sparkles
                size={18}
                className="text-accent"
              />

              <span className="font-medium text-primary">
                NestSure Premium Service
              </span>

            </div>

            {/* TITLE */}
            <h1
              className="
                mt-8
                text-5xl
                lg:text-6xl
                font-bold
                text-primary
                leading-tight
              "
            >
              {serviceName}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                text-lg
                text-gray-600
                leading-relaxed
                max-w-2xl
              "
            >
              Book trusted and verified professionals
              for high-quality {serviceName?.toLowerCase()}
              services with transparent pricing and
              seamless booking experience.
            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-5">

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  gap-4
                  shadow-sm
                  border
                  border-gray-100
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-accent/10
                    flex
                    items-center
                    justify-center
                  "
                >

                  <ShieldCheck
                    size={24}
                    className="text-accent"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-primary">
                    Verified Professionals
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Background checked experts
                  </p>

                </div>

              </div>

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  gap-4
                  shadow-sm
                  border
                  border-gray-100
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-accent/10
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Clock3
                    size={24}
                    className="text-accent"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-primary">
                    Fast Booking
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Easy & quick scheduling
                  </p>

                </div>

              </div>

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  gap-4
                  shadow-sm
                  border
                  border-gray-100
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-accent/10
                    flex
                    items-center
                    justify-center
                  "
                >

                  <BadgeCheck
                    size={24}
                    className="text-accent"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-primary">
                    Transparent Pricing
                  </h3>

                  <p className="text-gray-500 text-sm">
                    No hidden charges
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* BOOKING FORM */}
          <div>

            <div
              className="
                bg-white
                rounded-[36px]
                p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                border
                border-gray-100
                sticky
                top-28
              "
            >

              {/* HEADER */}
              <div>

                <h2 className="text-3xl font-bold text-primary">
                  Book This Service
                </h2>

                <p className="text-gray-500 mt-3">
                  Fill your details and our professional
                  team will contact you shortly.
                </p>

              </div>

              {/* SUCCESS MESSAGE */}
              {success && (
                <div
                  className="
                    mt-6
                    bg-green-100
                    text-green-700
                    border
                    border-green-200
                    rounded-2xl
                    p-4
                    font-medium
                  "
                >
                  Booking submitted successfully ✅
                </div>
              )}

              {/* FORM */}
              <div className="mt-8 space-y-5">

                {/* NAME */}
                <div className="relative">

                  <User
                    size={18}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      bg-[#F8FAFC]
                      py-4
                      pl-14
                      pr-5
                      outline-none
                      transition-all
                      duration-300
                      focus:border-accent
                      focus:bg-white
                    "
                  />

                </div>

                {/* PHONE */}
                <div className="relative">

                  <Phone
                    size={18}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      bg-[#F8FAFC]
                      py-4
                      pl-14
                      pr-5
                      outline-none
                      transition-all
                      duration-300
                      focus:border-accent
                      focus:bg-white
                    "
                  />

                </div>

                {/* ADDRESS */}
                <div className="relative">

                  <MapPin
                    size={18}
                    className="
                      absolute
                      left-5
                      top-5
                      text-gray-400
                    "
                  />

                  <textarea
                    rows={3}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      bg-[#F8FAFC]
                      py-4
                      pl-14
                      pr-5
                      outline-none
                      resize-none
                      transition-all
                      duration-300
                      focus:border-accent
                      focus:bg-white
                    "
                  />

                </div>

                {/* ISSUE */}
                <div className="relative">

                  <FileText
                    size={18}
                    className="
                      absolute
                      left-5
                      top-5
                      text-gray-400
                    "
                  />

                  <textarea
                    rows={5}
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    placeholder="Describe your issue"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      bg-[#F8FAFC]
                      py-4
                      pl-14
                      pr-5
                      outline-none
                      resize-none
                      transition-all
                      duration-300
                      focus:border-accent
                      focus:bg-white
                    "
                  />

                </div>

                {/* BUTTON */}
                <button
                  onClick={handleBooking}
                  disabled={loading}
                  className="
                    group
                    relative
                    overflow-hidden
                    w-full
                    rounded-2xl
                    bg-accent
                    hover:bg-[#169d8b]
                    py-4
                    text-white
                    font-semibold
                    text-lg
                    transition-all
                    duration-300
                    shadow-[0_15px_40px_rgba(31,175,154,0.25)]
                    hover:shadow-[0_20px_50px_rgba(31,175,154,0.35)]
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                  "
                >

                  <span
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-center
                      gap-3
                    "
                  >

                    {loading
                      ? "Booking..."
                      : "Confirm Booking"}

                    {!loading && (
                      <ArrowRight
                        size={20}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    )}

                  </span>

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default ServiceDetails;