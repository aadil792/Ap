import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home_1 from "./pages/home.jsx";
import About_1 from "./pages/about.jsx";
import Contact_1 from "./pages/contact.jsx";
import Blog_1 from "./pages/blog.jsx";
import Nav from "./componets/nav.jsx";
import Footer from "./componets/footer.jsx";
import Lo_home from "./login/lo-home.jsx";
import AfterLogin from "./login/after-lo.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home_1 />} />
        <Route path="/about" element={<About_1 />} />
        <Route path="/contact" element={<Contact_1 />} />
        <Route path="/blog" element={<Blog_1 />} />
        <Route path="/login" element={<Lo_home />} />
        <Route path="/nextlogin" element={<AfterLogin/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
