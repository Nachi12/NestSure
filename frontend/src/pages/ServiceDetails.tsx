// ============================================
// FULL PROFESSIONAL SERVICE FLOW
// SELECT CATEGORY -> SUBTYPE -> PACKAGE -> BOOK
// ============================================

import { useEffect, useState } from "react";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Star,
  Check,
} from "lucide-react";

const serviceData = {
  "Home Cleaning": {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",

    categories: [
      {
        title: "Bathroom Cleaning",

        subTypes: [
          {
            name: "1 Bathroom",

            price: 499,

            duration: "1 Hr",

            features: [
              "Deep cleaning",
              "Tile scrubbing",
              "Tap polishing",
            ],
          },

          {
            name: "2 Bathrooms",

            price: 899,

            duration: "2 Hrs",

            features: [
              "Deep cleaning",
              "Tile scrubbing",
              "Tap polishing",
            ],
          },
        ],
      },

      {
        title: "Full Home Cleaning",

        subTypes: [
          {
            name: "1 BHK",

            price: 1499,

            duration: "4 Hrs",

            features: [
              "Full dust removal",
              "Floor cleaning",
              "Kitchen cleaning",
            ],
          },

          {
            name: "2 BHK",

            price: 2499,

            duration: "6 Hrs",

            features: [
              "Full dust removal",
              "Floor cleaning",
              "Kitchen cleaning",
            ],
          },
        ],
      },

      {
        title: "Sofa Cleaning",

        subTypes: [
          {
            name: "5 Seater",

            price: 699,

            duration: "1.5 Hrs",

            features: [
              "Steam cleaning",
              "Stain removal",
              "Dry vacuum",
            ],
          },

          {
            name: "7 Seater",

            price: 999,

            duration: "2 Hrs",

            features: [
              "Steam cleaning",
              "Stain removal",
              "Dry vacuum",
            ],
          },
        ],
      },
    ],
  },
};

const ServiceDetails = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<any>(null);

  const [selectedService, setSelectedService] =
    useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service =
    serviceData["Home Cleaning"];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">

      {/* HERO */}
      <section className="pt-32 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-white
                  border
                  border-gray-100
                  shadow-sm
                "
              >

                <BadgeCheck
                  size={16}
                  className="text-accent"
                />

                <span className="text-sm font-medium">
                  Trusted Professionals
                </span>

              </div>

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
                Home Cleaning
              </h1>

              <p
                className="
                  mt-6
                  text-lg
                  text-gray-600
                  leading-relaxed
                "
              >
                Professional deep cleaning services
                for apartments and villas.
              </p>

              {/* TRUST */}
              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-6
                "
              >

                <div className="flex items-center gap-2">

                  <Star
                    size={18}
                    className="text-yellow-500"
                  />

                  <span className="font-medium text-sm">
                    4.9 Ratings
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <BadgeCheck
                    size={18}
                    className="text-accent"
                  />

                  <span className="font-medium text-sm">
                    Verified Experts
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <Clock3
                    size={18}
                    className="text-accent"
                  />

                  <span className="font-medium text-sm">
                    Quick Service
                  </span>

                </div>

              </div>

            </div>

            {/* IMAGE */}
            <div>

              <img
                src={service.image}
                alt="service"
                className="
                  w-full
                  h-[520px]
                  object-cover
                  rounded-[36px]
                  shadow-xl
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-8">

              {service.categories.map(
                (category, index) => (

                  <div
                    key={index}
                    className="
                      bg-white
                      rounded-[32px]
                      border
                      border-gray-100
                      shadow-sm
                      overflow-hidden
                    "
                  >

                    {/* CATEGORY HEADER */}
                    <div className="p-8 border-b border-gray-100">

                      <h2
                        className="
                          text-2xl
                          font-bold
                          text-primary
                        "
                      >
                        {category.title}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        Select your preferred package
                      </p>

                    </div>

                    {/* SUB TYPES */}
                    <div className="p-8 space-y-6">

                      {category.subTypes.map(
                        (item: any, idx: number) => (

                          <div
                            key={idx}
                            className={`
                              border
                              rounded-3xl
                              p-6
                              transition-all
                              duration-300
                              cursor-pointer
                              ${
                                selectedService?.name ===
                                item.name
                                  ? "border-accent bg-accent/5 shadow-lg"
                                  : "border-gray-100 hover:border-accent/40"
                              }
                            `}
                          >

                            {/* TOP */}
                            <div className="flex justify-between items-start">

                              <div>

                                <h3
                                  className="
                                    text-2xl
                                    font-bold
                                    text-primary
                                  "
                                >
                                  {item.name}
                                </h3>

                                <div
                                  className="
                                    mt-3
                                    flex
                                    items-center
                                    gap-2
                                    text-gray-500
                                  "
                                >

                                  <Clock3 size={16} />

                                  <span>
                                    {item.duration}
                                  </span>

                                </div>

                              </div>

                              <div
                                className="
                                  text-3xl
                                  font-bold
                                  text-primary
                                "
                              >
                                ₹{item.price}
                              </div>

                            </div>

                            {/* FEATURES */}
                            <div className="mt-6 space-y-3">

                              {item.features.map(
                                (
                                  feature: string,
                                  featureIndex: number
                                ) => (

                                  <div
                                    key={featureIndex}
                                    className="
                                      flex
                                      items-center
                                      gap-3
                                      text-gray-600
                                    "
                                  >

                                    <Check
                                      size={16}
                                      className="text-accent"
                                    />

                                    <span>
                                      {feature}
                                    </span>

                                  </div>

                                )
                              )}

                            </div>

                            {/* BUTTON */}
                            <button
                              onClick={() => {
                                setSelectedCategory(
                                  category.title
                                );

                                setSelectedService(
                                  item
                                );
                              }}
                              className={`
                                mt-8
                                w-full
                                rounded-2xl
                                py-4
                                font-semibold
                                transition-all
                                duration-300
                                flex
                                items-center
                                justify-center
                                gap-3
                                ${
                                  selectedService?.name ===
                                  item.name
                                    ? "bg-accent text-white"
                                    : "bg-[#F4F6FA] hover:bg-accent hover:text-white text-primary"
                                }
                              `}
                            >

                              {selectedService?.name ===
                              item.name
                                ? "Selected"
                                : "Choose Service"}

                              <ArrowRight size={18} />

                            </button>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                )
              )}

            </div>

            {/* RIGHT SUMMARY */}
            <div>

              <div
                className="
                  sticky
                  top-28
                  bg-white
                  rounded-[32px]
                  border
                  border-gray-100
                  shadow-lg
                  p-8
                "
              >

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-primary
                  "
                >
                  Booking Summary
                </h2>

                <p className="text-gray-500 mt-2">
                  Review your selected service.
                </p>

                {!selectedService ? (

                  <div
                    className="
                      mt-14
                      text-center
                    "
                  >

                    <div
                      className="
                        w-20
                        h-20
                        rounded-full
                        bg-[#F4F6FA]
                        flex
                        items-center
                        justify-center
                        mx-auto
                      "
                    >

                      <ArrowRight
                        size={24}
                        className="text-gray-400"
                      />

                    </div>

                    <h3
                      className="
                        mt-6
                        text-2xl
                        font-bold
                        text-primary
                      "
                    >
                      No Service Selected
                    </h3>

                    <p className="text-gray-500 mt-3">
                      Choose a service package to
                      continue.
                    </p>

                  </div>

                ) : (

                  <div className="mt-10">

                    {/* CATEGORY */}
                    <div
                      className="
                        bg-[#F7FAFC]
                        rounded-2xl
                        p-5
                      "
                    >

                      <p className="text-gray-500 text-sm">
                        Category
                      </p>

                      <h3
                        className="
                          mt-2
                          text-xl
                          font-bold
                          text-primary
                        "
                      >
                        {selectedCategory}
                      </h3>

                    </div>

                    {/* SERVICE */}
                    <div
                      className="
                        mt-5
                        bg-[#F7FAFC]
                        rounded-2xl
                        p-5
                      "
                    >

                      <p className="text-gray-500 text-sm">
                        Selected Package
                      </p>

                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-bold
                          text-primary
                        "
                      >
                        {selectedService.name}
                      </h3>

                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <span className="text-gray-500">
                          Duration
                        </span>

                        <span className="font-semibold">
                          {
                            selectedService.duration
                          }
                        </span>

                      </div>

                      <div
                        className="
                          mt-3
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <span className="text-gray-500">
                          Price
                        </span>

                        <span
                          className="
                            text-2xl
                            font-bold
                            text-primary
                          "
                        >
                          ₹
                          {
                            selectedService.price
                          }
                        </span>

                      </div>

                    </div>

                    {/* BOOK BUTTON */}
                    <button
                      className="
                        mt-8
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
                        shadow-[0_15px_40px_rgba(31,175,154,0.25)]
                      "
                    >
                      Continue Booking
                    </button>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ServiceDetails;