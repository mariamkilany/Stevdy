export const Footer = () => {
  return (
    <footer className="p-8 bg-textColorBold  ">
      <div className="max-w-screen-lg text-white flex flex-wrap gap-y-10 justify-center lg:justify-between mx-auto">
        <div className="flex flex-col gap-10 ">
          <h2 className=" text-4xl font-semibold">Study</h2>
          <p className="text-sm  w-56">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget diam at mi sollicitudin
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-lg font-medium">Nos services</p>
          <p className="text-sm  w-56">
            Avis clients Mentions légales Plan du site Blog d’Idéematic Le
            dictionnaire du digital <br /> ‹ Notre boutique /›
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-lg font-medium">Sign up for Special Offers!</p>
          <div className=" p-1 pl-4 rounded-full bg-white ">
            <input
              type="text"
              className="text-textColorBold focus:outline-none"
              placeholder="Mail"
            />
            <button className=" rounded-full bg-gridiantColor2 p-2 px-8 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
