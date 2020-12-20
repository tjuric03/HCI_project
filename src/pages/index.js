import React from "react"
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'
import TitlePage from "../modules/TitlePage"

const IndexPage = (props) => {
  
  const newsArray = props.data.allContentfulPost.edges
  
  return(
  <HeaderFooterLayout activeTab="Home">
    <TitlePage newsArray = {newsArray}></TitlePage>
  </HeaderFooterLayout>
)
}

export default IndexPage

export const pageQuery = graphql`
query News{
  allContentfulPost(filter: {node_locale: {eq: "en-US"}}, sort: {fields: date, order: DESC}) {
    edges {
      node {
        author
        title
        date(formatString: "MMMM DD, YYYY, HH:mm")
        slug
        sport
        image {
          fluid(maxWidth: 1920,maxHeight:1080,cropFocus: CENTER) {
            ...GatsbyContentfulFluid
          }
          title
          description
        }
        content {
          raw
        }
      }
    }
  }
}
`