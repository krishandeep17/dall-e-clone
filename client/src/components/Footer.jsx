import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl px-4 pb-12 pt-5">
      <p className="flex items-center justify-center gap-1 text-base text-[#6E6E80]">
        <span>Coded with</span>
        <FaHeart className="inline-block text-primary" />
        <span>by</span>
        <a
          href="https://github.com/krishandeep17"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:text-primary_600"
        >
          Krishandeep
        </a>
      </p>
    </footer>
  );
};
export default Footer;
