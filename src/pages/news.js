import React from 'react'
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'
import NewsArticleList from '../components/NewsArticleList'
import { graphql } from 'gatsby'

const News = (props) => {

    const newsArray = props.data.allContentfulPost.edges;

    const uniqueSports = [...new Set(newsArray.map(item => item.node.sport.charAt(0).toUpperCase()+item.node.sport.slice(1)))];
    const options = uniqueSports.map(item => ({
      "value" : item,
      "label" : item
    }));


    return(
        <HeaderFooterLayout activeTab="News">
            <NewsArticleList News= {newsArray} uniqueSports={options} location={props.location} ></NewsArticleList>
        </HeaderFooterLayout>
    )
}

export default News

export const pageQuery = graphql`
query AllNews{
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
          fixed(width: 300, height: 200 quality: 80, cropFocus: FACES) {
            ...GatsbyContentfulFixed
          }
        }
        content {
          raw
        }
      }
    }
  }
}
`