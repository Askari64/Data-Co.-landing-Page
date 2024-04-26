import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <section className=" bg-white w-full py-40 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className=" w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="Single"
          />
          <h2 className=" text-2xl font-bold text-center py-8">Single User</h2>
          <p className=" text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className=" py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className=" py-2 border-b mx-8">1 User Allowed</p>
            <p className=" py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className=" bg-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
        {/*Card 2*/}
        <div className=" bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className=" w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="Double"
          />
          <h2 className=" text-2xl font-bold text-center py-8">Partnership</h2>
          <p className=" text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className=" py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className=" py-2 border-b mx-8">3 Users Allowed</p>
            <p className=" py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className=" bg-[#000300] text-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
        {/*Card 3 */}
        <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className=" w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="Triple"
          />
          <h2 className=" text-2xl font-bold text-center py-8">
            Group Account
          </h2>
          <p className=" text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className=" py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className=" py-2 border-b mx-8">10 Users Allowed</p>
            <p className=" py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className=" bg-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
