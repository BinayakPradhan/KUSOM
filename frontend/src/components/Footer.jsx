import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e98e72] text-white py-8 px-4">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/5 w-full flex justify-center md:justify-start mb-4 md:mb-0">
          <img src="/src/assets/png/logo.png" alt="Logo" className="h-12" />
        </div>
        <div className="md:w-3/5 w-full flex flex-col items-center md:items-end">
          <div className="text-lg font-semibold mb-2">By Team SPECS</div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/BinayakPradhan"
              className="hover:text-gray-400"
            >
              Binayak
            </a>
            <a
              href="https://github.com/Sadxikshya"
              className="hover:text-gray-400"
            >
              Sadikshya
            </a>
            <a
              href="https://github.com/newcodesubed"
              className="hover:text-gray-400"
            >
              Subed
            </a>
            <a href="#" className="hover:text-gray-400">
              Swornima
            </a>
            <a
              href="https://github.com/sworrrnimaS"
              className="hover:text-gray-400"
            >
              Yudhir
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
