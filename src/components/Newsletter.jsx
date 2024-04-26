const Newsletter = () => {
  return (
    <section className=" w-full py-16 px-4 text-white">
      <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className=" lg:col-span-2">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our n ewsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className=" flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-[#000300]"
              type="email"
              placeholder="Enter Email"
            />
            <button className=" text-[#000300] bg-[#00df9a] w-[160px] md:w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 ">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
