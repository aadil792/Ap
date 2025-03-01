import { Link ,useLocation} from "react-router-dom";
import "../componets/n.css";

import Home_1 from "../pages/home";
import About_1 from "../pages/about";
import Contact_1 from "../pages/contact";
import Blog_1 from "../pages/blog";
import Logo from "../assets/partners.png";
function Nav() {

  const location= useLocation();
  const showNav=location.pathname !=="/login";
  if(!showNav) return null;


  return (
    <div className="parent-div">
      <div className="nav-div">
        <div className="log-div">
          <img src={Logo} className="image-logo" alt="image"></img>
          <div>
            <h1 className="h1">Community </h1>
            <p className="p"> Seamless Community Interaction and Management </p>
          </div>
        </div>
        <ul className="ui">
          <li className="li-di">
            <Link to="/" className="link" element={<Home_1 />}>
              Home
            </Link>
          </li>

          <li  className="li-di">
            <Link to="/about" className="link" element={<About_1 />}>
              About Us
            </Link>
          </li>

          <li  className="li-di">
            <Link to="/contact" className="link" element={<Contact_1 />}>
              Contact Us
            </Link>
          </li>

          <li  className="li-di">
            <Link to="/blog" className="link" element={<Blog_1 />}>
              Site Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
