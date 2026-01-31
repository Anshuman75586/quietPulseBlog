import { footer_data } from "../assets/assets";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-8 md:px-16 xl:px-32 bg-white text-gray-400">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 py-10 border-b border-gray-600">
        {/* Logo & About */}
        <div className="flex flex-col gap-4 md:gap-6 max-w-[400px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary cursor-pointer">
            QuietPulse
          </h1>
          <p className="text-sm sm:text-base">
            QuietPulse is a modern blog platform for creators to share their
            thoughts, stories, and tutorials.
          </p>

          {/* Social Media */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="font-semibold text-white text-sm">Follow Us</span>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index} className="min-w-[120px]">
              <h3 className="font-semibold text-base text-white mb-3">
                {section.title}
              </h3>
              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="py-6 text-center text-sm sm:text-base text-gray-500">
        © 2025 QuietPulse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
