import { graphql } from "gatsby"
import React, {useState, useEffect} from "react"
import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from "./style.module.css"
import { Link } from "gatsby"

const NewsPostContentful = props => {
  const post = props.data.contentfulPost
  const content = documentToReactComponents(JSON.parse(post.content.raw))
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  return (
    <HeaderFooterLayout activeTab="News">
      <div className={styles.container}>
        <article className={styles.article}>
          <h1>{post.title}</h1>
          <div className={styles.author}>{post.author}</div>
          <div className={styles.date}>{post.date}</div>
          <hr width="150" align="left"></hr>
          <div
            style={{
              minWidth: "250px",
              margin: "30px auto",
              boxSizing: "border-box",
            }}
          >
            <Img fluid={post.image.fluid} />
          </div>
          <div>{content}</div>
        </article>
        <div className={styles.linkContainer}>
          {props.pageContext.next ? (
            <div style={{width: "100%",display:"flex", justifyContent:"flex-start"}}>
              <Link to={`/news/${props.pageContext.next.slug}`}>
                {!isSmallScreen ? 
                <div className={styles.button}>Previous</div> :
                <div className={styles.smallButton}>&lt;</div>
              }
              </Link>
            </div>
          ) : <div/>}

          <Link to="/news" state={{ title: "", sport: post.sport }}>
            <div
              className={styles.sportButton}
            >
              {post.sport}
            </div>

          </Link>
          {props.pageContext.prev ? (
            <div style={{width: "100%",display:"flex", justifyContent:"flex-end"}}>
              <Link to={`/news/${props.pageContext.prev.slug}`}>
              {!isSmallScreen ? 
                <div className={styles.button}>Next</div> :
                <div className={styles.smallButton}>&gt;</div>
              }
              </Link>
            </div>
          ) : <div/>}
        </div>
      </div>
    </HeaderFooterLayout>
  )
}

export default NewsPostContentful

// Page query (Only one per page allowed, the results go to props.data of the page component)
// $slug is passed from the context object defined in createPage function in gatsby-node.js
export const pageQuery = graphql`
  query MyQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      author
      date(formatString: "MMMM DD, YYYY, hh:mm A")
      image {
        fluid(maxWidth: 1100, maxHeight: 600, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      sport
      title
      content {
        raw
      }
    }
  }
`
