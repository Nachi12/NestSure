import { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const ServiceDetails = () => {
  const { slug } = useParams();

  const serviceName = slug?.replace(/-/g, " ");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    issue: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  // HANDLE INPUTS
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

  // HANDLE SUBMIT
  const handleBooking = async () => {
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

      <Navbar />

      <div className="pt-32 px-6 pb-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

          {/* LEFT */}
          <div>

            <p className="text-accent font-medium mb-3">
              NestSure Service
            </p>

            <h1 className="text-5xl font-bold text-primary capitalize">
              {serviceName}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Book trusted and verified professionals
              for premium {serviceName} services.
            </p>

            <div className="mt-10 space-y-5">

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                ✓ Verified Professionals
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                ✓ Affordable Pricing
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                ✓ Fast Booking
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm">
                ✓ Safe & Secure
              </div>

            </div>
          </div>

          {/* RIGHT BOOKING FORM */}
          <div>

            <div className="bg-white rounded-[32px] p-8 shadow-xl">

              <h2 className="text-3xl font-semibold text-primary">
                Book This Service
              </h2>

              <p className="text-gray-500 mt-2">
                Fill your details to continue.
              </p>

              {success && (
                <div
                  className="
                    mt-6
                    bg-green-100
                    text-green-700
                    p-4
                    rounded-2xl
                  "
                >
                  Booking submitted successfully ✅
                </div>
              )}

              <div className="mt-8 space-y-5">

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    p-4
                    outline-none
                  "
                />

                {/* PHONE */}
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    p-4
                    outline-none
                  "
                />

                {/* ADDRESS */}
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    p-4
                    outline-none
                  "
                />

                {/* ISSUE */}
                <textarea
                  rows={4}
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  placeholder="Describe your issue"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    p-4
                    outline-none
                    resize-none
                  "
                />

                {/* BUTTON */}
                <button
                  onClick={handleBooking}
                  disabled={loading}
                  className="
                    w-full
                    bg-[#08233d]
                    hover:bg-[#104474]
                    text-white
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300
                    text-lg
                    font-medium
                  "
                >
                  {loading
                    ? "Booking..."
                    : "Confirm Booking"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default ServiceDetails;