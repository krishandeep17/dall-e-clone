import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative">
        <Navbar />
        <main className="w-full sm:p-8 px-4 py-7">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
