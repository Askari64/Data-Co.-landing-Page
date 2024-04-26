import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="text-3xl font-bold text-[#00df9a]">Data Co.</h1>
        <p className="py-4">
          Transform your data into actionable insights with our Data Analytics
          Dashboard.
        </p>
        <div className="flex justify-between w-[50%] md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className=" lg:col-span-2 flex justify-between mt-6">
        <div>
            <h5 className=" font-medium text-gray-400">Solutions</h5>
            <ul>
                <li className=" py-2 text-sm">Analytics</li>
                <li className=" py-2 text-sm">Marketing</li>
                <li className=" py-2 text-sm">Commerce</li>
                <li className=" py-2 text-sm">Insights</li>
            </ul>
        </div>
        <div>
            <h5 className=" font-medium text-gray-400">Support</h5>
            <ul>
                <li className=" py-2 text-sm">Pricing</li>
                <li className=" py-2 text-sm">Documentation</li>
                <li className=" py-2 text-sm">Guides</li>
                <li className=" py-2 text-sm">API Status</li>
            </ul>
        </div>
        <div>
            <h5 className=" font-medium text-gray-400">Company</h5>
            <ul>
                <li className=" py-2 text-sm">About</li>
                <li className=" py-2 text-sm">Blogs</li>
                <li className=" py-2 text-sm">jobs</li>
                <li className=" py-2 text-sm">Press</li>
                <li className=" py-2 text-sm">Careers</li>
            </ul>
        </div>
        <div>
            <h5 className=" font-medium text-gray-400">Legal</h5>
            <ul>
                <li className=" py-2 text-sm">Claim</li>
                <li className=" py-2 text-sm">Policy</li>
                <li className=" py-2 text-sm">Terms</li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
