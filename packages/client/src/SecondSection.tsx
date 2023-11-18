export const SecondSection = () => {
  return (
    <div className="flex h-fit md:min-h-screen font-primary">
      <div className="flex flex-col lg:flex-row mx-auto w-fit my-auto h-fit">
        <div className="w-full lg:w-[50vw] 2xl:w-[35vw] h-full my-auto">
          <div className="flex text-black font-secondary h-full">
            <img
              className="my-10 md:my-0"
              src="keoken-cat.png"
              alt="keoken cat"
            />
          </div>
        </div>

        <div className="w-full lg:w-[50vw] 2xl:w-[35vw] h-full my-auto">
          <div className="flex flex-row text-black font-secondary h-full">
            <div className="flex flex-col justify-items-center my-auto space-y-4 text-xl xl:text-2xl text-center xl:text-left w-full">
              <p className="text-center">Keoken text</p>
              <p className="text-center">Keoken text 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
