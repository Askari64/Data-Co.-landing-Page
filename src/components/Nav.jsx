import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleNav = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className=" bg-[#000300] bg-opacity-95 w-full sticky top-0 z-50 text-white">
      <div className="max-w-[1240px]  flex justify-between items-center m-auto  h-24  px-4 ">
      <h1 className="text-3xl font-bold text-[#00df9a]">Data Co.</h1>
      <ul className=" hidden md:flex items-center">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="px-4 py-2 cursor-pointer  bg-white text-[#000300] rounded-md font-mediumw-full hover:bg-[#00df9a] hover:text-white ">Contact</li>
      </ul>
      <div onClick={handleNav} className=" block md:hidden">
        {!toggle ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          toggle
            ? "fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">Home</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer ">Contact</li>
        </ul>
      </div>
      </div>
     
    </nav>
  );
};

export default Nav;
