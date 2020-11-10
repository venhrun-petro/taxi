import React from 'react' 
import Content from "~u/Content"
import Img from '~c/general/Image'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
    const content = Content(useFooterQuery())
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer_cont">
                    <p className="general_paragraph">{content.footerText}</p>
                    <div className="footer_soz">
                        {content.contactSozFooter.map((data, index) => {
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
            </div>
        </footer>
    )
}
    


export default Footer


export const useFooterQuery = () =>
  useStaticQuery(graphql`
    query FooterQuery {
      allFile(filter: {name: {eq: "content"}}) {
        nodes {
          childEnJson {
            footerText
            contactSozFooter {
              img
              src
            }
          }
          childUkJson {
            footerText
            contactSozFooter {
              img
              src
            }
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes
