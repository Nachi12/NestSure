import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BookingForm from "../components/booking/BookingForm";
import PaymentConfirmation from "../components/booking/PaymentConfirmation";
import { ArrowRight, Clock3, ShieldCheck } from "lucide-react";

type ServiceItem = {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
  selectionKey: string;
  category: string;
};

type ConfirmationData = {
  bookingId: string;
  paymentId: string;
  services: { name: string; category: string; price: number; duration: string }[];
  totalAmount: number;
  customerName: string;
};

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<"review" | "details" | "confirmed">("review");
  const [confirmationData, setConfirmationData] = useState<ConfirmationData | null>(null);

  // Get selected services from navigation state
  const selectedServices: ServiceItem[] = location.state?.selectedServices || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  // Redirect if no services selected
  if (!selectedServices.length) {
    navigate("/", { replace: true });
    return null;
  }

  const totalPrice = selectedServices.reduce(
    (sum: number, service: ServiceItem) => sum + service.price,
    0
  );

  const handlePaymentSuccess = (data: ConfirmationData) => {
    setConfirmationData(data);
    setStep("confirmed");
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Navbar />

      <div className="min-h-[calc(100vh-160px)] py-12">
        <div className="max-w-4xl mx-auto px-6">

          {/* Step Indicator */}
          {step !== "confirmed" && (
            <div className="mb-10">
              <div className="flex items-center justify-center gap-4">
                {/* Step 1 */}
                <div className="flex items-center gap-2">
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                      transition-all duration-300
                      ${
                        step === "review"
                          ? "bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-[0_8px_20px_rgba(16,185,129,0.3)]"
                          : "bg-emerald-100 text-emerald-600"
                      }
                    `}
                  >
                    {step === "details" ? (
                      <ShieldCheck size={16} />
                    ) : (
                      "1"
                    )}
                  </div>
                  <span
                    className={`
                      text-sm font-semibold hidden sm:block
                      ${step === "review" ? "text-primary" : "text-gray-400"}
                    `}
                  >
                    Review
                  </span>
                </div>

                <div className="w-12 h-[2px] bg-gray-200 rounded-full">
                  <div
                    className={`
                      h-full rounded-full transition-all duration-500
                      ${step === "details" ? "w-full bg-emerald-400" : "w-0 bg-emerald-400"}
                    `}
                  />
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-2">
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                      transition-all duration-300
                      ${
                        step === "details"
                          ? "bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-[0_8px_20px_rgba(16,185,129,0.3)]"
                          : "bg-gray-100 text-gray-400"
                      }
                    `}
                  >
                    2
                  </div>
                  <span
                    className={`
                      text-sm font-semibold hidden sm:block
                      ${step === "details" ? "text-primary" : "text-gray-400"}
                    `}
                  >
                    Details & Pay
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* STEP: REVIEW */}
          {step === "review" && (
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                <ArrowRight size={24} className="text-emerald-500" />
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4">
                Review Your Booking
              </h2>
              <p className="text-gray-600 mb-8">
                Please review your selected services before proceeding.
              </p>

              <div className="space-y-4 text-left">
                {selectedServices.map((service: ServiceItem) => (
                  <div
                    key={service.selectionKey}
                    className="
                      bg-white rounded-2xl border border-gray-100
                      shadow-sm p-6
                      hover:shadow-md transition-shadow duration-300
                    "
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center">
                        <Clock3 size={20} className="text-emerald-500" />
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm text-gray-400">{service.category}</p>
                        <h3 className="mt-1 font-bold text-primary text-lg">{service.name}</h3>
                        <div className="mt-2 flex items-center gap-2 text-gray-500 text-sm">
                          <Clock3 size={14} />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      <span className="font-bold text-2xl text-primary">₹{service.price}</span>
                    </div>
                  </div>
                ))}

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 font-medium">Estimated Total:</p>
                    <p className="text-3xl font-bold text-primary">₹{totalPrice}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setStep("details")}
                  className="
                    w-full
                    bg-gradient-to-r from-emerald-500 to-teal-500
                    hover:from-emerald-600 hover:to-teal-600
                    text-white
                    py-5
                    rounded-2xl
                    font-semibold
                    text-lg
                    transition-all
                    duration-300
                    shadow-[0_15px_40px_rgba(16,185,129,0.25)]
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  Continue to Details & Payment
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* STEP: DETAILS & PAYMENT */}
          {step === "details" && (
            <div>
              <button
                onClick={() => setStep("review")}
                className="
                  mb-6
                  text-sm font-medium text-gray-500
                  hover:text-primary
                  flex items-center gap-2
                  transition-colors duration-200
                "
              >
                <ArrowRight size={16} className="rotate-180" />
                Back to Review
              </button>

              <div
                className="
                  bg-white
                  rounded-[28px]
                  border border-gray-100
                  shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                  p-8
                "
              >
                <BookingForm
                  selectedServices={selectedServices}
                  onPaymentSuccess={handlePaymentSuccess}
                />
              </div>
            </div>
          )}

          {/* STEP: CONFIRMATION */}
          {step === "confirmed" && confirmationData && (
            <PaymentConfirmation data={confirmationData} />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;