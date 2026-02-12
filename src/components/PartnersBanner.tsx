import { InfiniteSlider } from "./InfiniteSlider";

const bannerItems = [
  { path: "/images/mest-logo.png" },
  { path: "/images/alx-logo.png" },
  { path: "/images/plugin-logo.webp" },
  { path: "/images/btl-logo.png" },
  { path: "/images/qKnow.png" },
  { path: "/images/ikolilu.png" },
  { path: "/images/enableAfrica.png" },
];

const PartnersBanner = () => {
  return (
    <div className="w-full max-w-full  backdrop-blur-sm border-y border-white/5 py-2 md:py-3 overflow-hidden">
      <InfiniteSlider gap={32} className="w-full">
        {bannerItems.map((item, index) => (
          <div
            className="flex items-center justify-center h-16 sm:h-26 w-36 sm:w-44 md:w-52 px-3"
            key={index}
          >
            <div className="backdrop-blur-sm rounded-lg p-4 hover:bg-white/5 transition-all duration-300 hover:border-white/20 w-full h-full flex items-center justify-center">
              <img
                src={item.path}
                alt="Partner Logo"
                className="object-contain h-fit w-fit brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default PartnersBanner;
