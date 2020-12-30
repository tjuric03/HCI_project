import React, {useState,useEffect} from "react"
import styles from "./style.module.css"
import Img from "gatsby-image"

const AboutParagraph = ({image, content, reversed}) => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
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

    return(
        <section className={reversed ? `${styles.aboutParagraph} ${styles.reverse}`: styles.aboutParagraph}>
            <div className={styles.image}>
                {!isSmallScreen ?
                    <Img fixed={image.node.childImageSharp.fixed}/> :
                    <Img fluid={image.node.childImageSharp.fluid}
                    imgStyle={{ height: "100%", width: "100%" }}/>
                    }
                    
            </div>
            <div className={styles.article}>
                <div className={styles.content}>
                    {content}
                </div>
            </div>
        </section>
    )
}

export default AboutParagraph

