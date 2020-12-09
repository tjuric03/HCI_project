import { graphql } from "gatsby"
import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import Img from "gatsby-image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const NewsPostContentful = props => {

    const post = props.data.contentfulPost;
    const content = documentToReactComponents(JSON.parse(post.content.raw));
    console.log(content);

    return (
        <HeaderFooterLayout activeTab="News">
            <div style={{minWidth:"500px",maxWidth:"720px",flex:"1"}}> 
                <Img fluid={post.image.fluid}/>
            </div>
            <h1>{post.title}</h1>
            <div>{post.author}</div>
            <div>{content}</div>
            <div>{post.sport}</div>
            <div>{post.date}</div>
        </HeaderFooterLayout>
    )
}



export default NewsPostContentful

// Page query (Only one per page allowed, the results go to props.data of the page component)
// $slug is passed from the context object defined in createPage function in gatsby-node.js
export const pageQuery = graphql`
    query MyQuery($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
        id
        author
        date
        image {
            fluid(maxWidth: 1000, maxHeight: 600, quality: 100) {
                ...GatsbyContentfulFluid
            }
            title
            description
        }
        sport
        title
        content {
            raw
        }
        }
    }      
`
