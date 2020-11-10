/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Map from './Map'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"
import Img from '~c/general/Image'

// eslint-disable-next-line react/react-in-jsx-scope
const Contact = () => {
  const content = Content(useContactQuery())

  return (
    <section className="contact" id="contact">
      <Img className="contact_img" src={content.mapImage} />
      <div className="container-small">
        <div className="contact_cont">
          <h2 className="sub-title">{content.contactTitile}</h2>
          <div className="contact_cont_info">
            <div className="contact_cont_info_items">
              <div className="contact_cont_info_items_row">
                <p className="general_paragraph">{content.contactName1}</p>
                <div className="">
                  {content.contactSoz1.map((data, index) => {
                    return (
                      <a
                        // eslint-disable-next-line react/no-array-index-key
                        key={`list_item_${index}`}
                        href={data.src ? data.src : '/'}
                        className="contact_cont_info_items_link"
                      >
                        <Img src={data.img} />
                      </a>
                    )
                  })}
                </div>
              </div>
              <a href={"tel:" + content.contactPhone1} className="general_paragraph">{content.contactPhone1}</a>
            </div>
            <div className="contact_cont_info_items">
              <div className="contact_cont_info_items_row">
                <p className="general_paragraph">{content.contactName2}</p>
                <div className="">
                  {content.contactSoz2.map((data, index) => {
                    return (
                      <a 
                        key={`list_item_${index}`}
                        href={data.src ? data.src : '/'}
                        className="contact_cont_info_items_link"
                      >
                        <Img src={data.img} />
                      </a>
                    )
                  })}
                </div>
              </div>
              <a href={"tel:" + content.contactPhone2} className="general_paragraph">{content.contactPhone2}</a>
            </div> 
          </div>
          <div className="contact_cont_map">
            <Map lat={content.mapWidth} lng={content.mapHeight} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


export const useContactQuery = () =>
  useStaticQuery(graphql`
    query ContactQuery {
      allFile(filter: {name: {eq: "content"}}) {
        nodes {
          childEnJson {
            contactTitile,
            contactName1,
            contactPhone1,
            mapWidth,
            mapHeight
            contactSoz1 {
              img
              src
            }
            contactName2,
            contactPhone2,
            contactSoz2 {
              img
              src
            }
            mapImage 
          }
          childUkJson {
            contactTitile,
            contactName1,
            contactPhone1,
            mapWidth,
            mapHeight
            contactSoz1 {
              img
              src
            }
            contactName2,
            contactPhone2,
            contactSoz2 {
              img
              src
            }
            mapImage 
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes