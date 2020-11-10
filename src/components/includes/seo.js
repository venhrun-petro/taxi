/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"

function SEO({ description, lang, meta, keywords, title }) {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `
  // )

  const content = Content(useSeoQuery())
  const metaDescription = content.seoDescription
  
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${content.seoTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: content.seoTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: content.seoTitle,
        },
        {
          name: `twitter:title`,
          content: content.seoTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: content.seoKeywords,
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `uk`,
  meta: [],
  keywords: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO



export const useSeoQuery = () =>
  useStaticQuery(graphql`
    query SeoQuery {
      allFile(filter: {name: {eq: "content"}}) {
        nodes {
          childEnJson { 
            seoTitle
            seoDescription
            seoKeywords
          }
          childUkJson { 
            seoTitle
            seoDescription
            seoKeywords
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes