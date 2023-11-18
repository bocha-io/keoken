import ArrowIcon from "./ArrowIcon";

// @ts-ignore
import { scrollTo } from "./Animate";

export const FirstSection = () => {
  return (
    <div className="flex flex-col h-fit w-fit my-auto mx-auto">
      <div className="flex flex-col lg:flex-row  items-center text-white my-auto w-fit h-fit">
        <div className="text-center lg:text-left mt-0 md:mt-[-80px] lg:mt-0">
          <h1 className="text-5xl font-primary">Keoken</h1>
          <p className="h-1 w-3/4 bg-gradient-to-tr from-[#F9017F] to-[#800DC2] mb-3 mx-auto lg:mx-0"></p>
          <div className="w-3/4 py-2 font-secondary text-xl xl:text-2xl space-y-6 mx-auto lg:mx-0">
            <p>Bridging communities through NFT Ownership</p>
          </div>
          <div className="py-20 lg:py-0"></div>
        </div>
        <div className="my-auto">
          <div className="flex justify-center lg:justify-end">
            <img src="logo_img.png" alt="logo" />
          </div>
        </div>
      </div>

      <div className="w-full pt-32 xl:pt-0 hidden lg:block">
        <div
          className="w-fit mx-auto animate-bounce cursor-pointer"
          onClick={() => {
            scrollTo({ id: "second", duration: 1000 });
          }}
        >
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};
