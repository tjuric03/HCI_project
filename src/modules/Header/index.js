import React from "react"
import styles from "./style.module.css"

import Logo from '../../components/Logo'
import Navigation from "../../components/Navigation"

const Header = () => (
  <header className={styles.header}>
    <Logo/>
    <Navigation/>
  </header>
)

export default Header
