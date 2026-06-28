import {
  Clock3,
  ArrowRight,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Variant = {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
};

export type SelectedService = Variant & {
  selectionKey: string;
  category: string;
};

type Props = {
  title: string;
  icon: LucideIcon;
  variants: Variant[];
  selectedServices: SelectedService[];
  onSelect: (variant: Variant) => void;
};

const ServiceCategoryCard = ({
  title,
  icon: Icon,
  variants,
  selectedServices,
  onSelect,
}: Props) => {
  return (
    <div
      className="
        bg-white
        rounded-[32px]
        border
        border-gray-100
        shadow-sm
        overflow-hidden
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          items-center
          gap-4
          p-7
          border-b
          border-gray-100
        "
      >
        <div
          className="
            w-16
            h-16
            rounded-2xl
            bg-[#EEF5FF]
            flex
            items-center
            justify-center
          "
        >
          <Icon
            size={28}
            className="text-primary"
          />
        </div>

        <div>
          <h2
            className="
              text-2xl
              font-bold
              text-primary
            "
          >
            {title}
          </h2>

          <p className="text-gray-500 mt-1">
            Select your preferred package
          </p>
        </div>
      </div>

      {/* VARIANTS */}
      <div className="p-7 space-y-5">
        {variants.map((variant) => {
          const selectionKey = `${title}-${variant.id}-${variant.name}`;
          const isSelected = selectedServices.some(
            (item) => item.selectionKey === selectionKey
          );

          return (
            <div
              key={variant.id}
              onClick={() => onSelect(variant)}
              className={`
                relative
                rounded-3xl
                border
                cursor-pointer
                transition-all
                duration-300
                p-6
                ${
                  isSelected
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-gray-100 hover:border-accent/30 hover:shadow-md"
                }
              `}
            >
              {/* SELECTED BADGE */}
              {isSelected && (
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    w-8
                    h-8
                    rounded-full
                    bg-accent
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Check
                    size={18}
                    className="text-white"
                  />
                </div>
              )}

              {/* TOP */}
              <div className="flex justify-between">
                <div>
                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-primary
                    "
                  >
                    {variant.name}
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mt-3
                      text-gray-500
                    "
                  >
                    <Clock3 size={16} />
                    <span>{variant.duration}</span>
                  </div>
                </div>

                <div className="text-right">
                  <h4
                    className="
                      text-3xl
                      font-bold
                      text-primary
                    "
                  >
                    ₹{variant.price}
                  </h4>
                </div>
              </div>

              {/* FEATURES */}
              <div className="mt-6 space-y-3">
                {variant.features.map((feature, index) => (
                  <div
                    key={`${variant.id}-${index}`}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-accent
                      "
                    />

                    <span className="text-gray-600">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(variant);
                }}
                className={`
                  mt-7
                  w-full
                  py-4
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-3
                  ${
                    isSelected
                      ? "bg-accent text-white"
                      : "bg-[#F5F7FA] hover:bg-accent hover:text-white text-primary"
                  }
                `}
              >
                {isSelected
                  ? "Selected"
                  : "Choose Service"}

                <ArrowRight size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategoryCard;
