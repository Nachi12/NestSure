import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  Star,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";

import ServiceCategoryCard from "../components/service/ServiceCategoryCard";

import BookingSideBar from "../components/service/BookingSideBar";

import { servicesData } from "../data/servicesData";

const ServicePage = () => {
  const { slug } = useParams();

  const service =
    servicesData[
      slug as keyof typeof servicesData
    ];

  const [selectedVariant, setSelectedVariant] =
    useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-white">

        <Navbar />

        <div className="pt-40 text-center">

          <h1 className="text-5xl font-bold text-primary">
            Service Not Found
          </h1>

        </div>

        <Footer />

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FAFC]">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

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

                <ShieldCheck
                  size={18}
                  className="text-accent"
                />

                <span className="font-medium text-primary">
                  Trusted Professionals
                </span>

              </div>

              <h1
                className="
                  mt-8
                  text-5xl
                  lg:text-7xl
                  font-bold
                  leading-tight
                  text-primary
                "
              >
                {service.title}
              </h1>

              <p
                className="
                  mt-8
                  text-lg
                  text-gray-600
                  leading-relaxed
                  max-w-2xl
                "
              >
                {service.description}
              </p>

              {/* TRUST */}
              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  gap-8
                "
              >

                <div className="flex items-center gap-3">

                  <Star
                    size={20}
                    className="text-yellow-500"
                  />

                  <span className="font-medium text-primary">
                    4.9 Ratings
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    size={20}
                    className="text-accent"
                  />

                  <span className="font-medium text-primary">
                    Verified Experts
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Clock3
                    size={20}
                    className="text-accent"
                  />

                  <span className="font-medium text-primary">
                    Quick Service
                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-[650px]
                  object-cover
                  rounded-[40px]
                  shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICE SECTION */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2">

              <div className="space-y-8">

                {service.categories.map(
                  (category: any) => (

                    <ServiceCategoryCard
                      key={category.id}
                      title={category.title}
                      icon={category.icon}
                      variants={category.variants}
                      selectedVariant={
                        selectedVariant
                      }
                      onSelect={setSelectedVariant}
                    />

                  )
                )}

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <BookingSideBar
                selectedVariant={selectedVariant}
              />

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default ServicePage;