import { InfiniteSlider } from "./InfiniteSlider";

const bannerItems = [
  { label: "partner" },
  { label: "partner" },
  { label: "partner" },
  { label: "partner" },
  { label: "partner" },
  { label: "partner" },
];

const PartnersBanner = () => {
  return (
    <div className="w-full max-w-full bg-white py-4 md:py-6 overflow-hidden">
      <InfiniteSlider gap={24} className="w-full">
        {bannerItems.map((item, index) => (
          <div
            className="flex items-center justify-center text-primary text-4xl font-bold h-12 sm:h-16 w-32 sm:w-40 md:w-48 px-2"
            key={index}
          >
            {item.label}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default PartnersBanner;
