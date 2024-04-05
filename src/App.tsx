import { Button, Carousel, Footer, Navbar } from "./components";
import Dashboard from "./assets/dashboard.png";
import Clinet1 from "./assets/client-1.png";
import Clinet2 from "./assets/client-2.png";
import Clinet3 from "./assets/client-3.png";
import Clinet4 from "./assets/client-4.png";
import Clinet5 from "./assets/client-5.png";
import Scale from "./assets/scale.png";
import BootCamp from "./assets/bootcamp.png";
import HQ from "./assets/hq.png";
import Certification from "./assets/certification.png";
import Rectangle from "./assets/rectangle.png";
import User from "./assets/user.png";
import "./App.css";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { StarIcon } from "@heroicons/react/16/solid";

function App() {
  const platforms: JSX.Element[] = [
    <img src={Dashboard} alt="dashboard" />,
    <img src={Dashboard} alt="dashboard" />,
    <img src={Dashboard} alt="dashboard" />,
    <img src={Dashboard} alt="dashboard" />,
  ];
  const users: JSX.Element[] = [
    <div
      className=" flex justify-center items-center gap-8 p-10 "
      style={{ boxShadow: "0 0 9px #80808085", width: "96%" }}
    >
      <img src={User} alt="user-img" className=" w-40 h-40" />
      <div className="flex flex-col justify-between gap-3">
        <h5 className="text-xl text-textColorBold font-medium">
          Florrie Jacobs
        </h5>
        <span className="text-sm text-textColorLight">CEO of Company</span>
        <p className="text-sm text-textColorLight ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
        <div className="flex gap-2">
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
        </div>
      </div>
    </div>,
    <div
      className=" flex justify-center items-center gap-8 p-10 "
      style={{ boxShadow: "0 0 9px #80808085", width: "96%" }}
    >
      <img src={User} alt="user-img" className=" w-40 h-40" />
      <div className="flex flex-col justify-between gap-3">
        <h5 className="text-xl text-textColorBold font-medium">
          Florrie Jacobs
        </h5>
        <span className="text-sm text-textColorLight">CEO of Company</span>
        <p className="text-sm text-textColorLight ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
        <div className="flex gap-2">
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
        </div>
      </div>
    </div>,
    <div
      className=" flex justify-center items-center gap-8 p-10 "
      style={{ boxShadow: "0 0 9px #80808085", width: "96%" }}
    >
      <img src={User} alt="user-img" className=" w-40 h-40" />
      <div className="flex flex-col justify-between gap-3">
        <h5 className="text-xl text-textColorBold font-medium">
          Florrie Jacobs
        </h5>
        <span className="text-sm text-textColorLight">CEO of Company</span>
        <p className="text-sm text-textColorLight ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
        <div className="flex gap-2">
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
          <StarIcon className="w-6 h-6 text-gridiantColor1" />
        </div>
      </div>
    </div>,
  ];
  return (
    <main className=" overflow-hidden">
      <header className=" h-screen min-h-fit bg-left-top bg-no-repeat lg:bg-[url('./assets/background.png')] bg-gradient-to-r to-gridiantColor1 from-gridiantColor2 overflow-hidden">
        <Navbar />
        <div className="flex flex-col  items-center lg:flex-row p-4 max-w-screen-lg mx-auto h-4/5 py-20 relative">
          <div className="flex flex-col gap-[32px]">
            <div className="text-white flex flex-col justify-center gap-3 w-full lg:w-1/2 ">
              <p className=" text-xl">Advanced Platform</p>
              <h1 className=" text-[58px]  leading-[68px] font-semibold">
                Take your team to the next level
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
            </div>
            <Button className=" from-white to-white !text-gridiantColor2 font-medium w-fit ">
              About us
            </Button>
          </div>
          <img
            src={Dashboard}
            alt="dashboard"
            className=" lg:absolute lg:-right-60 lg:w-3/4 lg:top-1/2 transform -translate-x-[25px]  lg:-translate-y-1/2 "
          />
        </div>
      </header>
      <section className="flex max-w-screen-lg mx-auto flex-wrap lg:flex-nowrap">
        <img src={Clinet1} alt="client" />
        <img src={Clinet2} alt="client" />
        <img src={Clinet3} alt="client" />
        <img src={Clinet4} alt="client" />
        <img src={Clinet5} alt="client" />
      </section>
      <section className="max-w-screen-lg mx-auto py-20 flex flex-wrap gap-y-5 justify-between p-4">
        <div className="lg:w-2/5 flex flex-col gap-5  before:w-12 before:h-1 before:bg-gridiantColor2 before:rounded">
          <h2 className=" text-4xl  font-semibold  text-textColorBold">
            The best business solution for you
          </h2>
          <p className="text-textColorLight text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <div className=" w-3/4 flex justify-between text-gridiantColor2">
            <p>Learn About Our Success</p>
            <ArrowRightIcon className=" w-5 h-5 " />
          </div>
        </div>
        <div className="lg:w-1/2 grid gap-5 md:grid-cols-2  ">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className=" rounded-full bg-customOrangeColor w-20 h-20 flex justify-center items-center shadow-md">
              <img src={Scale} alt="scale" />
            </div>
            <h5 className="text-textColorBold font-medium  relative after:absolute after:left-0  after:w-1/2 after:h-1 after:bg-gridiantColor2 after:rounded after:block after:-bottom-4">
              Scale Your Activity
            </h5>
            <p className="text-textColorLight text-sm pt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className=" rounded-full bg-customTealColor w-20 h-20 flex justify-center items-center shadow-md">
              <img src={BootCamp} alt="scale" />
            </div>
            <h5 className="text-textColorBold font-medium  relative after:absolute after:left-0  after:w-1/2 after:h-1 after:bg-gridiantColor2 after:rounded after:block after:-bottom-4">
              Bootcamps
            </h5>
            <p className="text-textColorLight text-sm pt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className=" rounded-full bg-customPurpleColor w-20 h-20 flex justify-center items-center shadow-md">
              <img src={HQ} alt="scale" />
            </div>
            <h5 className="text-textColorBold font-medium  relative after:absolute after:left-0  after:w-1/2 after:h-1 after:bg-gridiantColor2 after:rounded after:block after:-bottom-4">
              Hight Quality
            </h5>
            <p className="text-textColorLight text-sm pt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className=" rounded-full bg-customGreenColor w-20 h-20 flex justify-center items-center shadow-md">
              <img src={Certification} alt="scale" />
            </div>
            <h5 className="text-textColorBold font-medium  relative after:absolute after:left-0  after:w-1/2 after:h-1 after:bg-gridiantColor2 after:rounded after:block after:-bottom-4">
              Get Certifcation
            </h5>
            <p className="text-textColorLight text-sm pt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
        </div>
      </section>
      <section className="relative max-w-screen-lg mx-auto mb-10 lg:h-screen flex flex-col md:flex-row md:justify-end items-center p-4">
        <img
          src={Rectangle}
          alt="rect"
          className=" w-6/7 absolute hidden md:block  -left-3/4"
        />
        <img
          src={Dashboard}
          alt="dashboard"
          className=" md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:-left-1/3 md:w-4/5 top-0"
        />
        <div className=" md:w-1/2 flex justify-center">
          <div className=" flex flex-col gap-5  before:w-12 before:h-1 before:bg-gridiantColor2 before:rounded">
            <h2 className=" text-4xl  font-semibold  text-textColorBold">
              Best Platform for the Technological Era
            </h2>
            <p className="text-textColorLight text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet
            </p>
            <div className=" w-3/4 flex justify-between text-gridiantColor2">
              <p>Learn About Our Success</p>
              <ArrowRightIcon className=" w-5 h-5 " />
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 flex max-w-screen-lg mx-auto flex-col gap-4 items-center">
        <p className="text-textColorLight  text-lg">
          Advanced Customer Service Platform
        </p>
        <h1 className="text-textColorBold text-5xl font-semibold text-center">
          Platform Overview
        </h1>
        <p className="text-textColorLight  text-sm lg:w-1/2 text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. <br /> At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet
        </p>
        <Carousel elements={platforms} />
      </section>
      <section className="relative max-w-screen-lg mx-auto lg:h-screen flex flex-col md:flex-row md:justify-start items-center p-4  ">
        <img
          src={Rectangle}
          alt="rect"
          className=" w-4/5 absolute hidden md:block -right-2/3"
        />
        <img
          src={Dashboard}
          alt="dashboard"
          className="md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:-right-1/3 md:w-2/3 top-0"
        />
        <div className=" md:w-1/2 flex justify-center">
          <div className="flex flex-col gap-5  before:w-12 before:h-1 before:bg-gridiantColor2 before:rounded">
            <h2 className=" text-4xl  font-semibold  text-textColorBold">
              Best Platform for the Technological Era
            </h2>
            <p className="text-textColorLight text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet
            </p>
            <div className=" w-3/4 flex justify-between text-gridiantColor2">
              <p>Learn About Our Success</p>
              <ArrowRightIcon className=" w-5 h-5 " />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-center items-center p-4 gap-20 max-w-screen-lg mx-auto">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <h2 className=" text-4xl  font-semibold  text-textColorBold">
            Acceleration Process to Grow Your Business
          </h2>
          <p className=" text-sm text-textColorLight">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <Button className=" w-fit">About us</Button>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-10">
          <div className=" flex gap-4">
            <div>
              <div className="w-12 h-12 text-white font-bold text-xl rounded-full bg-gridiantColor2 flex justify-center items-center">
                1
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className=" text-textColorBold text-2xl font-medium">
                Market Research
              </h3>
              <p className="text-textColorLight text-sm ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <div className=" flex gap-4">
            <div>
              <div className="w-12 h-12 text-white font-bold text-xl rounded-full bg-gridiantColor2 flex justify-center items-center">
                1
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className=" text-textColorBold text-2xl font-medium">
                Market Research
              </h3>
              <p className="text-textColorLight text-sm ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <div className=" flex gap-4">
            <div>
              <div className="w-12 h-12 text-white font-bold text-xl rounded-full bg-gridiantColor2 flex justify-center items-center">
                1
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className=" text-textColorBold text-2xl font-medium">
                Market Research
              </h3>
              <p className="text-textColorLight text-sm ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-10 py-16 justify-center max-w-screen-lg mx-auto">
        <h2 className=" text-center py-16 text-4xl font-bold text-textColorBold">
          Don't Just Take <br />
          our Word for it!
        </h2>
        <div className="flex justify-around flex-wrap items-center gap-y-10">
          <div className="flex flex-col gap-2 items-center">
            <span className=" text-5xl font-semibold text-gridiantColor2">
              570
            </span>
            <span className="text-textColorBold font-medium">Download</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className=" text-5xl font-semibold text-gridiantColor2">
              570
            </span>
            <span className="text-textColorBold font-medium">Active User</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className=" text-5xl font-semibold text-gridiantColor2">
              570
            </span>
            <span className="text-textColorBold font-medium">
              Positive Feedback
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className=" text-5xl font-semibold text-gridiantColor2">
              570
            </span>
            <span className="text-textColorBold font-medium">+ rating</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-12 max-w-screen-lg p-4 mx-auto">
        <div className="lg:w-1/2">
          <Carousel elements={users} />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center gap-5">
          <h2 className=" text-textColorBold text-4xl font-semibold">
            Grow Your Business and Join Our Happy Users
          </h2>
          <p className="text-textColorLight">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <Button className="w-fit">About us</Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
