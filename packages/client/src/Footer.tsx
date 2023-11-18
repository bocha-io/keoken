export const Footer = () => {
  return (
    <div className="flex flex-col">
      <a href="https://github.com/bocha-io/keoken" className="w-fit mx-auto">
        <img
          src="githubbanner.png"
          alt="github"
          className="h-[150px] mx-auto py-10"
        />
      </a>
      <div className="flex flex-col md:grid md:grid-cols-3 justify-between space-y-4 md:space-y-0 pb-4 md:pb-0">
        <img
          src="gatetefooter.png"
          alt="footer"
          className="h-[150px] hidden md:flex"
        />
        <div className="flex h-full w-full">
          <img
            src="ethglobal.png"
            alt="ethglobal"
            className="h-[100px] my-auto mx-auto"
          />
        </div>
        <div className="flex h-full w-full">
          <img
            src="gnosis.png"
            alt="gnosis"
            className="h-[25px] my-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
