import React from "react"
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'
import TitlePage from "../modules/TitlePage"

const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <TitlePage></TitlePage>
  </HeaderFooterLayout>
)

export default IndexPage