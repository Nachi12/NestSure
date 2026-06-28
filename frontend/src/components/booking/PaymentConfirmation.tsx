import { Check, Home, ArrowRight, Clock3, CreditCard, Hash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

type ServiceItem = {
  name: string;
  category: string;
  price: number;
  duration: string;
};

type ConfirmationData = {
  bookingId: string;
  paymentId: string;
  services: ServiceItem[];
  totalAmount: number;
  customerName: string;
};

const PaymentConfirmation = ({ data }: { data: ConfirmationData }) => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowContent(true), 600);
    const t2 = setTimeout(() => setShowDetails(true), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      {/* Success Animation */}
      <div className="text-center">
        <div
          className={`
            w-24 h-24
            rounded-full
            mx-auto
            flex items-center justify-center
            transition-all duration-700 ease-out
            ${
              showContent
                ? "bg-gradient-to-br from-emerald-400 to-teal-500 scale-100 opacity-100 shadow-[0_20px_60px_rgba(16,185,129,0.35)]"
                : "bg-gray-200 scale-50 opacity-0"
            }
          `}
        >
          <Check
            size={40}
            className={`
              text-white
              transition-all duration-500 delay-300
              ${showContent ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
          />
        </div>

        <h2
          className={`
            mt-8 text-4xl font-bold text-primary
            transition-all duration-700 delay-200
            ${showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
        >
          Payment Successful!
        </h2>

        <p
          className={`
            mt-4 text-lg text-gray-500
            transition-all duration-700 delay-400
            ${showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
        >
          Thank you, {data.customerName}! Your booking has been confirmed.
        </p>
      </div>

      {/* Payment Details Card */}
      <div
        className={`
          mt-10
          bg-white
          rounded-[28px]
          border border-gray-100
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          overflow-hidden
          transition-all duration-700 delay-500
          ${showDetails ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Reference IDs */}
        <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Hash size={18} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Booking ID</p>
                <p className="mt-1 text-sm font-bold text-primary break-all">
                  {data.bookingId.slice(-8).toUpperCase()}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <CreditCard size={18} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Payment ID</p>
                <p className="mt-1 text-sm font-bold text-primary break-all">
                  {data.paymentId}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-primary mb-4">Booked Services</h3>
          <div className="space-y-3">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-between
                  bg-[#F7FAFC] rounded-2xl p-4
                "
                style={{
                  transitionDelay: `${800 + index * 150}ms`,
                }}
              >
                <div className="flex-1">
                  <p className="text-xs text-gray-400">{service.category}</p>
                  <h4 className="mt-1 font-bold text-primary">{service.name}</h4>
                  <div className="mt-1 flex items-center gap-2 text-gray-400 text-xs">
                    <Clock3 size={12} />
                    <span>{service.duration}</span>
                  </div>
                </div>
                <span className="text-lg font-bold text-primary">₹{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="px-6 pb-6">
          <div
            className="
              rounded-2xl
              bg-gradient-to-r from-emerald-500 to-teal-500
              p-5
              flex items-center justify-between
            "
          >
            <span className="text-white/80 font-medium">Total Paid</span>
            <span className="text-3xl font-bold text-white">₹{data.totalAmount}</span>
          </div>
        </div>
      </div>

      {/* Info Note */}
      <div
        className={`
          mt-6 text-center text-sm text-gray-400
          transition-all duration-700 delay-700
          ${showDetails ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
        `}
      >
        Our team will contact you shortly to schedule your service.
      </div>

      {/* Actions */}
      <div
        className={`
          mt-8 flex flex-col sm:flex-row gap-4
          transition-all duration-700 delay-[900ms]
          ${showDetails ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
        `}
      >
        <button
          onClick={() => navigate("/")}
          className="
            flex-1
            flex items-center justify-center gap-3
            py-4
            rounded-2xl
            bg-gradient-to-r from-emerald-500 to-teal-500
            hover:from-emerald-600 hover:to-teal-600
            text-white
            font-semibold
            text-lg
            transition-all duration-300
            shadow-[0_15px_40px_rgba(16,185,129,0.25)]
          "
        >
          <Home size={20} />
          Go to Home
        </button>

        <button
          onClick={() => navigate("/")}
          className="
            flex-1
            flex items-center justify-center gap-3
            py-4
            rounded-2xl
            bg-white
            border border-gray-200
            hover:border-emerald-300
            hover:bg-emerald-50
            text-primary
            font-semibold
            text-lg
            transition-all duration-300
          "
        >
          Book More Services
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
