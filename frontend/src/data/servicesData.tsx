import {
  Sparkles,
  ShowerHead,
  Sofa,
  Paintbrush,
  Wrench,
  Zap,
  AirVent,
} from "lucide-react";

export const servicesData = {
  "home-cleaning": {
    title: "Home Cleaning",

    description:
      "Professional deep cleaning services for apartments and villas.",

    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400&auto=format&fit=crop",

    categories: [
      {
        id: 1,

        title: "Bathroom Cleaning",

        icon: ShowerHead,

        variants: [
          {
            id: 1,
            name: "1 Bathroom",

            price: 499,

            duration: "1 hr",

            features: [
              "Deep cleaning",
              "Tile scrubbing",
              "Tap polishing",
            ],
          },

          {
            id: 2,
            name: "2 Bathrooms",

            price: 899,

            duration: "2 hrs",

            features: [
              "Deep cleaning",
              "Tile scrubbing",
              "Tap polishing",
            ],
          },
        ],
      },

      {
        id: 2,

        title: "Full Home Cleaning",

        icon: Sparkles,

        variants: [
          {
            id: 1,
            name: "1 BHK",

            price: 1499,

            duration: "4 hrs",

            features: [
              "Full dust removal",
              "Floor cleaning",
              "Kitchen cleaning",
            ],
          },

          {
            id: 2,
            name: "2 BHK",

            price: 2499,

            duration: "6 hrs",

            features: [
              "Full dust removal",
              "Floor cleaning",
              "Kitchen cleaning",
            ],
          },
        ],
      },

      {
        id: 3,

        title: "Sofa Cleaning",

        icon: Sofa,

        variants: [
          {
            id: 1,
            name: "5 Seater",

            price: 699,

            duration: "1.5 hrs",

            features: [
              "Steam cleaning",
              "Stain removal",
              "Dry vacuum",
            ],
          },

          {
            id: 2,
            name: "7 Seater",

            price: 999,

            duration: "2 hrs",

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

  electrician: {
    title: "Electrician",

    description:
      "Certified electricians for installation and repairs.",

    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1400&auto=format&fit=crop",

    categories: [
      {
        id: 1,

        title: "Fan Installation",

        icon: Zap,

        variants: [
          {
            id: 1,
            name: "Ceiling Fan",

            price: 299,

            duration: "30 mins",

            features: [
              "Safe installation",
              "Wiring check",
            ],
          },
        ],
      },

      {
        id: 2,

        title: "Switch Repair",

        icon: Wrench,

        variants: [
          {
            id: 1,
            name: "Basic Repair",

            price: 199,

            duration: "20 mins",

            features: [
              "Switch replacement",
              "Wiring check",
            ],
          },
        ],
      },
    ],
  },

  plumbing: {
    title: "Plumbing",

    description:
      "Professional plumbing services for homes.",

    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1400&auto=format&fit=crop",

    categories: [
      {
        id: 1,

        title: "Tap Repair",

        icon: Wrench,

        variants: [
          {
            id: 1,
            name: "Single Tap",

            price: 199,

            duration: "20 mins",

            features: [
              "Leak fixing",
              "Pressure check",
            ],
          },
        ],
      },
    ],
  },

  painting: {
    title: "Painting",

    description:
      "Premium interior and exterior painting services.",

    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1400&auto=format&fit=crop",

    categories: [
      {
        id: 1,

        title: "Interior Painting",

        icon: Paintbrush,

        variants: [
          {
            id: 1,
            name: "1 Room",

            price: 2999,

            duration: "1 day",

            features: [
              "Premium paint",
              "Wall putty",
              "Cleanup included",
            ],
          },
        ],
      },
    ],
  },

  "ac-repair": {
    title: "AC Repair",

    description:
      "Fast AC servicing and maintenance support.",

    image:
      "https://images.unsplash.com/photo-1631545806522-bf6e4f8ba7d7?q=80&w=1400&auto=format&fit=crop",

    categories: [
      {
        id: 1,

        title: "AC Service",

        icon: AirVent,

        variants: [
          {
            id: 1,
            name: "Split AC",

            price: 599,

            duration: "45 mins",

            features: [
              "Gas check",
              "Filter cleaning",
              "Water wash",
            ],
          },
        ],
      },
    ],
  },
};