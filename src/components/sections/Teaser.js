import React from 'react'
import Form from '~c/sections/Form'
import Img from '~c/general/Image'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"

// eslint-disable-next-line react/react-in-jsx-scope
// eslint-disable-next-line react/prefer-stateless-function
const Teaser = () => {
  const content = Content(useDataQuery())
  return (
    <section className="teaser">
      <Img className="teaser_img" src={content.teaserImage} />
      <div className="container-small">
        <div className="teaser_cont">
          <h1 className="teaser_cont_title">
            {content.title}
            <span className="teaser_cont_title-red">
              {content.subTitle}
            </span>
          </h1>
          <Form />
        </div>
      </div>
    </section>
  )
}


export default Teaser


export const useDataQuery = () =>
  useStaticQuery(graphql`
    query DataQuery {
      allFile(filter: {name: {eq: "content"}}) {
        nodes {
          childEnJson {
            title
            teaserImage
            subTitle
          }
          childUkJson {
            title
            teaserImage
            subTitle
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes