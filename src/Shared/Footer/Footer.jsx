import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-24 pb-8 px-12 border border-zinc-400 rounded-md m-3">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between">
        <h2 className="text-3xl text-cyan-400 font-semibold">Job Portal</h2>
        <div className="flex flex-row space-x-4 text-xl text-cyan-400  cursor-pointer">
          <FaFacebookF className="hover:text-blue-500" />
          <FaXTwitter className="hover:text-black" />
          <FaInstagram className="hover:text-pink-500" />
          <FaLinkedinIn className="hover:text-sky-500" />
        </div>
      </div>

      <h2 className="font-thin text-xl text-slate-900 text-center mt-12">
        All Rights Reserves to Gazi Nafis Md Abdullah 2025
      </h2>
    </footer>
  );
};

export default Footer;
