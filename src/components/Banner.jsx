import { bannerList } from "@/context/constants";

const Banner = () => {
  return (
    <div className="relative">
      {bannerList.map((banner) => (
        <div
          key={banner.alt}
          className={"flex justify-center items-center h-[90vh]"}
        >
          <div className="w-[60%] max-sm:w-[80%] text-center absolute z-50">
            <h1 className="text-8xl max-sm:text-6xl max-sm:tracking-[15px] tracking-[25px] mb-8 text-white font-bold font-mono">
              {banner.header}
            </h1>
            <p className="font-serif text-white leading-8">{banner.text}</p>
          </div>

          <div className="w-full h-full bg-black bg-gradient-to-t from-black to-sky-950 opacity-55 absolute top-0 left-0 z-10" />

          <img
            className="object-cover absolute left-0 w-full top-0  h-full"
            src={banner.imgURL}
            alt={banner.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
