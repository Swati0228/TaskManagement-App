import { Github } from "lucide-react"; // You can install lucide-react via npm if not already
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-4 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600">
        <p className="flex items-center gap-1">
          Made with <FaHeart className="text-red-500" /> by Swati
        </p>
        <span>|</span>
        <a
          href="https://github.com/Swati0228"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-black transition"
        >
          <Github size={16} /> GitHub
        </a>
        <span>|</span>
        <p>I am Swati, a full-stack developer 🚀</p>
      </div>
    </footer>
  );
};

export default Footer;
