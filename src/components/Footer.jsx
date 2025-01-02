import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center w-full h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm mb-4">Questions? Call 000-800-040-1843</p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#" className="text-sm hover:underline">
            FAQ
          </a>
          <a href="#" className="text-sm hover:underline">
            Help Center
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of Use
          </a>
          <a href="#" className="text-sm hover:underline">
            Privacy
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Netflix India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
