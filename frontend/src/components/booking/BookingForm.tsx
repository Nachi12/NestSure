import React, { useState } from "react";
import { Clock3, CreditCard, Loader2 } from "lucide-react";
import { getAuthToken } from "../../store/authStore";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type ServiceItem = {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
  selectionKey: string;
  category: string;
};

type BookingFormProps = {
  selectedServices: ServiceItem[];
  onPaymentSuccess: (data: {
    bookingId: string;
    paymentId: string;
    services: { name: string; category: string; price: number; duration: string }[];
    totalAmount: number;
    customerName: string;
  }) => void;
};

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_placeholder";

const BookingForm = ({
  selectedServices,
  onPaymentSuccess,
}: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    issue: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const totalPrice = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    setPaymentError(null);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.issue.trim()) {
      newErrors.issue = "Please describe the issue or service needed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const initiatePayment = async () => {
    if (!validate()) return;

    setIsProcessing(true);
    setPaymentError(null);

    try {
      // Step 1: Create Razorpay order
      const token = getAuthToken();
      const orderRes = await fetch(`${API_URL}/payments/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ amount: totalPrice }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.success) {
        throw new Error(orderData.message || "Failed to create payment order");
      }

      // Step 2: Open Razorpay checkout
      const options = {
        key: RAZORPAY_KEY,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "NestSure",
        description: `Payment for ${selectedServices.length} service(s)`,
        order_id: orderData.order.id,
        prefill: {
          name: formData.name.trim(),
          contact: formData.phone.trim(),
        },
        theme: {
          color: "#1FAF9A",
        },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            // Step 3: Verify payment & create booking
            const serviceDescription = selectedServices
              .map((s) => `${s.name} (₹${s.price})`)
              .join(", ");

            const token = getAuthToken();
            const verifyRes = await fetch(`${API_URL}/payments/verify`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingData: {
                  service: serviceDescription,
                  name: formData.name.trim(),
                  phone: formData.phone.trim(),
                  address: formData.address.trim(),
                  issue: formData.issue.trim(),
                  totalAmount: totalPrice,
                  services: selectedServices.map((s) => ({
                    name: s.name,
                    category: s.category,
                    price: s.price,
                    duration: s.duration,
                  })),
                },
              }),
            });

            const verifyData = await verifyRes.json();

            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(verifyData.message || "Payment verification failed");
            }

            // Success!
            onPaymentSuccess({
              bookingId: verifyData.booking._id,
              paymentId: response.razorpay_payment_id,
              services: selectedServices.map((s) => ({
                name: s.name,
                category: s.category,
                price: s.price,
                duration: s.duration,
              })),
              totalAmount: totalPrice,
              customerName: formData.name.trim(),
            });
          } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Verification failed";
            setPaymentError(msg);
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Payment initiation failed";
      setPaymentError(msg);
      setIsProcessing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    initiatePayment();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Selected Services Summary */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Booking Details</h2>

        <div className="space-y-3">
          <p className="font-medium text-gray-600">Selected Services:</p>
          <div className="space-y-2">
            {selectedServices.map((service) => (
              <div
                key={service.selectionKey}
                className="bg-[#F7FAFC] rounded-xl p-4"
              >
                <div className="flex justify-between items-start">
                  <p className="text-gray-500 text-sm">{service.category}</p>
                  <span className="font-medium text-primary">
                    ₹{service.price}
                  </span>
                </div>

                <h3 className="mt-2 font-bold text-primary">{service.name}</h3>

                <div className="mt-2 flex items-center gap-2 text-gray-500 text-sm">
                  <Clock3 size={14} />
                  <span>{service.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Total Amount</span>
              <span className="text-2xl font-bold text-primary">₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-primary">Customer Information</h3>

        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 ${
                errors.address ? "border-red-500" : ""
              }`}
              placeholder="Enter your complete address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Service Details
            </label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 ${
                errors.issue ? "border-red-500" : ""
              }`}
              placeholder="Describe the issue or what service you need..."
            />
            {errors.issue && (
              <p className="mt-1 text-sm text-red-600">{errors.issue}</p>
            )}
          </div>
        </div>
      </div>

      {/* Payment Error */}
      {paymentError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200">
          <p className="text-red-700 font-medium text-sm">{paymentError}</p>
        </div>
      )}

      {/* Payment Info */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
        <CreditCard size={20} className="text-emerald-500 flex-shrink-0" />
        <p className="text-sm text-emerald-700">
          Secure payment powered by Razorpay. You'll be redirected to complete payment.
        </p>
      </div>

      {/* Submit Button */}
      <div className="pt-4 border-t border-gray-200">
        <button
          type="submit"
          disabled={isProcessing}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            px-6
            py-5
            bg-gradient-to-r from-emerald-500 to-teal-500
            hover:from-emerald-600 hover:to-teal-600
            text-white
            font-bold
            text-lg
            rounded-2xl
            transition-all
            duration-300
            disabled:opacity-50
            disabled:cursor-not-allowed
            shadow-[0_15px_40px_rgba(16,185,129,0.25)]
          "
        >
          {isProcessing ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>Processing Payment...</span>
            </>
          ) : (
            <>
              <CreditCard size={20} />
              <span>Pay ₹{totalPrice} & Confirm Booking</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
