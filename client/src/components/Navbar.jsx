import { Link } from "react-router-dom";

import { logo } from "../assets";

const Navbar = () => {
  return (
    <header className="w-full bg-white sm:px-8 px-4 py-4 border-b border-b-[#ececf1] shadow">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 object-contain" />
            <p className="text-xl font-bold">Text2Image AI</p>
          </div>
        </Link>
        <Link
          to="/create-post"
          className="text-white bg-primary hover:bg-primary_600 font-medium rounded-md px-4 py-2 text-center outline-primary_600 tracking-wide"
        >
          Create
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
