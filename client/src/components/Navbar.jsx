import { Link } from "react-router-dom";

import { logo } from "../assets";

const Navbar = () => {
  return (
    <header className="w-full px-4 py-4 shadow-sm sm:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 object-contain" />
            <p className="text-xl font-bold">Text2Image AI</p>
          </div>
        </Link>
        <Link
          to="/create-post"
          className="rounded-md bg-primary px-4 py-2 text-center font-medium tracking-wide text-white outline-primary_600 hover:bg-primary_600"
        >
          Create
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
