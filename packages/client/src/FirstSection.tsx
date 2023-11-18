import ArrowIcon from "./ArrowIcon";

// @ts-ignore
import { scrollTo } from "./Animate";

export const FirstSection = () => {
  return (
    <div className="flex flex-col h-fit w-fit my-auto mx-auto">
      <div className="flex flex-col h-fit w-fit my-auto mx-auto">
        <div className="flex flex-col lg:flex-row  items-center text-white my-auto w-fit h-fit">
          <div className="my-auto">
            <div className="flex justify-center lg:justify-end">
              <img
                src="title.png"
                alt="logo"
                className="max-w-[90vw] lg:max-w-[35vw]"
              />
            </div>
          </div>
          <div className="my-auto">
            <div className="flex justify-center lg:justify-end">
              <img
                src="logo_img.png"
                alt="logo"
                className="max-w-[90vw] lg:max-w-[35vw]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:block">
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
