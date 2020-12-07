import React from "react"
import styles from "./style.module.css"

import {Link} from 'gatsby'
import Logo from '../../components/Images/Logo'
import Navigation from "../../components/Navigation"

const Header = ({activeTab}) => (
  <header className={styles.header}>
    <Link to="/" style={{minWidth:"150px",maxWidth:"200px",flex:"1"}}>
      <Logo/>
    </Link>
    <Navigation activeTab = {activeTab}/>
  </header>
)

export default Header
