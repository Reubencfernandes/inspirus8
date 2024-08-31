import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Foot = () => {
  return (
    <div className="p-5 bg-cardcor">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col mb-4 md:mb-0 justify-center md:ml-20 mt-5">
          <h1 className="text-4xl md:text-6xl mb-2 font-bebas text-white text-center md:text-left">
            Inspirus
          </h1>
          <p className="text-white font-inter text-center md:text-left">
            Instagram: @inspirusdbce
          </p>
          <p className="text-white font-inter text-center md:text-left">
            Facebook: @Inspirus
          </p>
          <p className="text-white font-inter text-center md:text-left">
            Twitter: @inspirus2k21
          </p>
          <div className="flex space-x-3 mt-3">
            <Link href="https://instagram.com">
              <button className="bg-white p-3 md:p-5 rounded-full">
                <FaInstagram className="text-black text-xl md:text-2xl" />
              </button>
            </Link>
            <Link href="https://facebook.com">
              <button className="bg-white p-3 md:p-5 rounded-full">
                <FaFacebook className="text-black text-xl md:text-2xl" />
              </button>
            </Link>
            <Link href="https://linkedin.com">
              <button className="bg-white p-3 md:p-5 rounded-full">
                <FaLinkedin className="text-black text-xl md:text-2xl" />
              </button>
            </Link>
          </div>
        </div>
        <div className="p-2 w-full md:w-auto">
          <img
            src="https://dbcegoa.ac.in/wp-content/uploads/2022/08/dbce_logo6.png"
            alt="dbce"
            className="mb-3 max-w-full h-auto mx-auto md:mx-0"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1360.6718020204228!2d73.96888062153238!3d15.291716223812802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb1631736de9d%3A0x980720b4516a7a5!2sDon%20Bosco%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1725124242484!5m2!1sen!2sin"
            width="100%"
            height="250"
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Foot;
