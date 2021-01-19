import React, {useState, useEffect} from "react"

import {Link} from 'gatsby'
import Logo from '../../components/Images/Logo'
import Navigation from "../../components/Navigation"
import "./Header.css";
import {GiHamburgerMenu} from "react-icons/gi"
import HeaderImage from "../../components/Images/HeaderImage"

const Header = ({activeTab}) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 770px)");
    mediaQuery.addEventListener("change",handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change",handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <HeaderImage>
      <header className="Header">
        <Link to="/">
          <div style={{width:"150px", padding:"10px 30px"}}> 
            <Logo/>
          </div>
        </Link>
        {(!isSmallScreen || isNavVisible) && (
          <Navigation activeTab = {activeTab} componentStyle="Header"/>
        )}
        <button onClick={toggleNav} className="Burger">
          <GiHamburgerMenu color="white" style={{padding: "3px" ,border: "1px solid white", borderRadius:"3px", verticalAlign:"middle"}} ></GiHamburgerMenu>
        </button>
      </header>
    </HeaderImage>
  );
}

export default Header
