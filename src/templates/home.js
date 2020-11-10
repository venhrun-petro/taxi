import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "~c/layout/layout"
import SEO from "~c/includes/seo"
import Teaser from "~c/sections/Teaser"
import About from "~c/sections/About"
import Slider from "~c/Slider"
import Contact from "~c/sections/Contact"
import useLanguageKey from '~h/useLanguageKey'
import { useDispatch, useSelector } from 'react-redux'


const HomePage = ({
  data: {
    markdownRemark: {
      fields: { langKey },
      frontmatter: { metaTitle, metaDescription }
      },
    },
  }) => {

  const state = useSelector(props => props);
  const dispatch = useDispatch();

  useLanguageKey(dispatch, langKey);

  

  return (
    <Layout>
      <SEO title={metaTitle} description={metaDescription} />
      <Teaser />
      <Slider />
      <About />
      <Contact />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePage($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } }
      frontmatter: { templateKey: { eq: "home" } }
    ) {
      fields {
        langKey
      }
      frontmatter {
        templateKey
        metaTitle
        metaDescription
      }
    }
  }
`
