import {
  Clock3,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

type Variant = {
  id: number;

  name: string;

  price: number;

  duration: string;

  features: string[];
};

type Props = {
  selectedVariant: Variant | null;
};

const BookingSidebar = ({
  selectedVariant,
}: Props) => {
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
            Review your selected service.
          </p>

        </div>

        {/* CONTENT */}
        <div className="p-8">

          {!selectedVariant ? (

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
                No Service Selected
              </h3>

              <p className="mt-3 text-gray-500">
                Choose a service package to continue.
              </p>

            </div>

          ) : (

            <>

              {/* PACKAGE */}
              <div
                className="
                  rounded-3xl
                  bg-[#F7FAFC]
                  p-6
                "
              >

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-primary
                  "
                >
                  {selectedVariant.name}
                </h3>

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-3
                    text-gray-500
                  "
                >

                  <Clock3 size={18} />

                  <span>
                    {selectedVariant.duration}
                  </span>

                </div>

                <div className="mt-6">

                  <h4
                    className="
                      text-5xl
                      font-bold
                      text-primary
                    "
                  >
                    ₹{selectedVariant.price}
                  </h4>

                </div>

              </div>

              {/* FEATURES */}
              <div className="mt-8">

                <h4
                  className="
                    text-xl
                    font-semibold
                    text-primary
                  "
                >
                  Included Features
                </h4>

                <div className="mt-5 space-y-4">

                  {selectedVariant.features.map(
                    (feature, index) => (

                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <div
                          className="
                            w-8
                            h-8
                            rounded-full
                            bg-accent/10
                            flex
                            items-center
                            justify-center
                          "
                        >

                          <BadgeCheck
                            size={16}
                            className="text-accent"
                          />

                        </div>

                        <span className="text-gray-600">
                          {feature}
                        </span>

                      </div>

                    )
                  )}

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

                Continue Booking

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