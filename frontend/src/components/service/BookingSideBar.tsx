import {
  Clock3,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

type Variant = {
  id: number;
  selectionKey: string;
  category: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
};

type Props = {
  selectedServices: Variant[];
  onCheckout: () => void;
};

const BookingSidebar = ({
  selectedServices,
  onCheckout,
}: Props) => {
  const totalPrice = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );

  const totalServices = selectedServices.length;

  return (
    <div
      className="
        sticky
        top-28
      "
    >
      <div
        className="
          bg-white
          rounded-[36px]
          border
          border-gray-100
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >
        {/* HEADER */}
        <div className="p-8 border-b border-gray-100">
          <h2
            className="
              text-3xl
              font-bold
              text-primary
            "
          >
            Booking Summary
          </h2>

          <p className="text-gray-500 mt-3">
            Review your selected services.
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-8">
          {selectedServices.length === 0 ? (
            <div className="text-center py-10">
              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  bg-[#F5F7FA]
                  mx-auto
                  flex
                  items-center
                  justify-center
                "
              >
                <ArrowRight
                  size={28}
                  className="text-gray-400"
                />
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-semibold
                  text-primary
                "
              >
                No Services Selected
              </h3>

              <p className="mt-3 text-gray-500">
                Choose one or more services to continue.
              </p>
            </div>
          ) : (
            <>
              {/* SERVICES */}
              <div className="space-y-4">
                {selectedServices.map((service) => (
                  <div
                    key={service.selectionKey}
                    className="
                      rounded-3xl
                      bg-[#F7FAFC]
                      p-5
                    "
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3
                          className="
                            text-lg
                            font-bold
                            text-primary
                          "
                        >
                          {service.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {service.category}
                        </p>

                        <div
                          className="
                            mt-2
                            flex
                            items-center
                            gap-2
                            text-gray-500
                          "
                        >
                          <Clock3 size={16} />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      <div
                        className="
                          text-xl
                          font-bold
                          text-primary
                        "
                      >
                        ₹{service.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTALS */}
              <div
                className="
                  mt-6
                  rounded-3xl
                  border
                  border-gray-100
                  p-6
                "
              >
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Services
                  </span>

                  <span className="font-semibold text-primary">
                    {totalServices}
                  </span>
                </div>

                <div className="mt-4 flex justify-between">
                  <span className="text-gray-500">
                    Total Amount
                  </span>

                  <span
                    className="
                      text-3xl
                      font-bold
                      text-primary
                    "
                  >
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* TRUST */}
              <div className="mt-10 space-y-5">
                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <ShieldCheck
                    size={20}
                    className="text-accent"
                  />

                  <span className="text-gray-600">
                    Verified Professionals
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <BadgeCheck
                    size={20}
                    className="text-accent"
                  />

                  <span className="text-gray-600">
                    Transparent Pricing
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={onCheckout}
                className="
                  mt-10
                  group
                  w-full
                  bg-accent
                  hover:bg-[#169d8b]
                  text-white
                  py-5
                  rounded-2xl
                  font-semibold
                  text-lg
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-[0_15px_40px_rgba(31,175,154,0.25)]
                "
              >
                Proceed to Checkout

                <ArrowRight
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingSidebar;
