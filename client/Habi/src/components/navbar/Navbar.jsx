import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AuthContext } from "../../context/AuthContext";
function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="/logo.png" alt="" />
          <span>Habi</span>
        </a>
        <div className="navitems">
          <a href="/" className="navlink">
            Home
          </a>
          <a href="" className="navlink">
            About
          </a>
          <a href="" className="navlink">
            Contact
          </a>
          <a href="" className="navlink">
            Agents
          </a>
        </div>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <img
                src={currentUser.avatar || "/noavatar.png"}
                alt=""
                className="profileimg"
              />
            </Link>
          </div>
        ) : (
          <>
            <a href="/login" className="navlink">
              Sign in
            </a>
            <a href="/register" className="navlink">
              Sign up
            </a>
          </>
        )}
      </div>
      <div className="menuicon">
        <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
      </div>
      <div className={open ? "menu active" : "menu"}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
        <a href="">Sign in</a>
        <a href="">Sign up</a>
      </div>
    </nav>
  );
}
export default Navbar;
