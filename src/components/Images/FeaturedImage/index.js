import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FeaturedImage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulPost(filter: {node_locale: {eq: "en-US"}, title: {eq: "Trampoline best Olympic sport confirmed"}}) {
      edges {
        node {
          title
          sport
          image {
            id
            fluid(maxWidth: 1000, maxHeight: 600, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
  `)
  return(
    <div style={{minWidth:"500px",maxWidth:"720px",flex:"1"}}> 
      <Img fluid={data.allContentfulPost.edges[0].node.image.fluid}/>
    </div>
  )
}

export default FeaturedImage
