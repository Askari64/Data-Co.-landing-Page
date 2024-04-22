import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="text-white">
      <div className=" max-w-[880px] mt-[96px] text-center w-full h-screen mx-auto flex flex-col justify-center">
        <p className="text-[#00df9a] p-2 font-bold">
          Growing with Data Analytics
        </p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Data
        </h1>
        <div className=" text-center justify-center flex md:text-5xl sm:text-4xl text-xl font-bold">
          <p className=" py-4">Fast, Flexible Financing for</p>
          <ReactTyped className="pl-2 md:pl-4 py-4 text-gray-500"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={100}
            backSpeed={120}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500  ">
          Monitor your data analytics to increase your revenue for BTB, BTC &
          SASS platforms
        </p>
        <button className=" bg-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto py-3 ">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
