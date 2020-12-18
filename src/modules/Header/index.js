import React, {useState, useEffect} from "react"

import {Link} from 'gatsby'
import Logo from '../../components/Images/Logo'
import Navigation from "../../components/Navigation"
import "./Header.css";
import {GiHamburgerMenu} from "react-icons/gi"

const Header = ({activeTab}) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 740px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
      setNavVisibility(false);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
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
  );
}


export default Header

// const Header = ({activeTab}) => (
//   <header className={styles.header}>
    // <Link to="/" style={{minWidth:"150px",maxWidth:"200px",flex:"1"}}>
    //   <div style={{minWidth:"150px",maxWidth:"200px",flex:"1"}}> 
    //     <Logo/>
    //   </div>
    // </Link>
//     <Navigation activeTab = {activeTab} componentStyle="Header"/>
//   </header>
// )

