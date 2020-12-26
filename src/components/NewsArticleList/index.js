import React, { useState } from "react"
import NewsArticle from "../NewsArticle"
import { matchSorter } from "match-sorter"
import ShowMore from "@tedconf/react-show-more"
import Select from "react-select"

import styles from './style.module.css' 
import {AiOutlineSearch} from 'react-icons/ai'
import { relativeTimeRounding } from "moment"


const NewsArticleList = ({ News, uniqueSports }) => {
  const [newsList, setNewsList] = useState(News);
  const [filter, setFilter] = useState({title:"", sport:null});

  const showInc = 3;

  const handleChangeFilter = (value,category) => {
    setFilter(Object.assign(filter,{[category]:value}));
    setNewsList(filterSearch());
  }

  const filterSearch = () => {
    if (!(filter.title) && !(filter.sport)) {
      return News
    }

    let tempArray = [];

    // 1. filtering by selected sport
    if(filter.sport){
      tempArray = News.filter(item => item.node.sport === filter.sport);
    }
    else{
      tempArray = News;
    }
    // 2.1 filtering the array by title search
    if(filter.title){
      const filteredArray =  matchSorter(tempArray, filter.title, {
          keys: ["node.title"],
          threshold: matchSorter.rankings.CONTAINS,
          keepDiacritics: true,
      });
      // 2.2 sorting results by date
      filteredArray.sort((a,b)=>(new Date(a.node.date) > new Date(b.node.date) ? -1 : 1));
      return filteredArray;
    }
    else{
      return tempArray;
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.filter}>
        <Select className = {styles.select} options={uniqueSports} onChange={(e)=>handleChangeFilter(e ? e.value : null,"sport")} isClearable={true}/>
        <div className={styles.inputContainer}>
          <span className={styles.searchIcon}><AiOutlineSearch color="darkgrey" size="20px" style={{verticalAlign:"middle"}}/></span>
          <input
            className={styles.input}
            onChange={(e)=>handleChangeFilter(e.target.value,"title")}
            placeholder="Search"
          />
        </div>
      </div>
      <ShowMore items={newsList} by={showInc}>
        {({ current, onMore }) => (
          <div className={styles.articleContainer}>
            <ul>
              {current.map((x) => (
                <li key={x.node.title}>
                  <NewsArticle
                    picture={x.node.image.fluid}
                    date={x.node.date}
                    header={x.node.title}
                    sport={x.node.sport}
                    content={x.node.content}
                    slug={x.node.slug}
                  ></NewsArticle>
                </li>
              ))}
            </ul>
            {News.length > showInc && onMore ? (
              <div
                disabled={!onMore}
                onClick={() => {
                  if (!!onMore) onMore()
                }}
                className={styles.moreButton}
              >
                More
              </div>
            ) : null}
          </div>
        )}
      </ShowMore>
    </div>
  )
}

export default NewsArticleList
