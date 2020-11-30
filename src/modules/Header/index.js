import React from "react"
import styles from "./style.module.css"

import Logo from '../../components/Logo'

const Header = () => (
  <header className={styles.header}>
    <Logo/>
    This is the header
  </header>
)

export default Header
