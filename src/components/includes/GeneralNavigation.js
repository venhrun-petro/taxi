/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { Link } from 'react-scroll'
import { Link as LinkPage } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"
import { useSelector } from 'react-redux'

const GeneralNavigation = () => {
  const state = useSelector(props => props); 
  const content = Content(useGeneralNavigationQuery())

  return (
    <div className="navigation_menu">
      <div className="navigation_menu_list">
        {content.list.map((data, index) => {
          return (
            <Link
              key={`list_item_${index}`}
              to={data.src}
              smooth
              spy
              offset={0}
              duration={600}
              activeClass="active"
              className="navigation_menu_list_link"
            >
              {data.item}
            </Link>
          )
        })}
      </div>
      <div className="navigation_menu_language">
        <LinkPage
          to="/en"
          className={`navigation_menu_language_link ${state.languageValue !== "uk" ? "navigation_menu_language_link_active" : ""}`}
        >
          ENG
        </LinkPage>
        <p className="navigation_menu_language_link navigation_menu_language_link-between">
          /
        </p>
        <LinkPage
          to="/"
          className={`navigation_menu_language_link ${state.languageValue === "uk" ? "navigation_menu_language_link_active" : ""}`}
        >
          UKR
        </LinkPage>
      </div>
    </div>
  )
}


export default GeneralNavigation

export const useGeneralNavigationQuery = () =>
  useStaticQuery(graphql`
    query GeneralNavigationQuery {
      allFile(filter: {name: {eq: "header"}}) {
        nodes {
          childEnJson {
            list {
              item
              src
            }
          }
          childUkJson {
            list {
              item
              src
            }
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes