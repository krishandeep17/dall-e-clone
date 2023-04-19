import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto px-4 pt-5 pb-12">
      <p className="text-[#6E6E80] text-base flex items-center justify-center gap-1">
        <span>Coded with</span>
        <FaHeart className="text-primary inline-block" />
        <span>by</span>
        <a
          href="https://krishandeep.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary_600 font-medium"
        >
          Krishandeep
        </a>
      </p>
    </footer>
  );
};
export default Footer;
