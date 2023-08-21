import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <section className="mx-auto max-w-5xl px-4 py-7 sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </section>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
