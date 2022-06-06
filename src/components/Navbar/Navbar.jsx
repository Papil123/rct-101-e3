import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Home from "../../pages/Home";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth, Logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if(isAuth){
      navigate("/")
    }else{
      navigate("/login");
    }

    
  };

  return (
    <div data-cy="navbar" style={{justifyContent:"space-between" ,display:"flex"}}>
      <div>Logo</div>
      <Link data-cy="navbar-home-link" to="/"></Link>
      <div>
      <span data-cy="navbar-cart-items-count">{"Cart:"}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLogin}>
        {isAuth ? "Logout" : "Login"}
      </button>
      </div>
    </div>
  );
};

export default Navbar;
