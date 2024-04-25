import Laptop from "../assets/laptop.jpg";

const AnalyticsSection = () => {
  return (
    <section className=" bg-white w-full py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className=" w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className=" text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Transform your data into actionable insights with our Data Analytics
            Dashboard. Centralize your data management process, allowing you to
            efficiently analyze and visualize key metrics across your
            organization.
          </p>
          <button className=" bg-[#000300] text-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
