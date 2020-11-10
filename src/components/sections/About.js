/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Slider from 'react-slick'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"
import Img from '~c/general/Image'

// eslint-disable-next-line react/prefer-stateless-function
const About = () => {
  const content = Content(useAboutQuery())

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  }
  return (
    <section className="about" id="about">
      <Img className="about_img" src={content.aboutImage} />
      <div className="container-small">
        <div className="about_cont">
          <h2 className="sub-title">{content.aboutTitile}</h2>
          <p className="general_paragraph">
            {content.aboutText}
          </p>
          <p className="general_paragraph">
            <strong>
            {content.aboutTExtStrong}
            </strong>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="about_gallery">
          <div className="about_gallery_outside" />
          <Slider {...settings}>
            {content.galleryAbout.map((data, index) => {
              return (
                <Img
                  // eslint-disable-next-line react/no-array-index-key
                  key={`galleryAbout_img_${index}`}
                  src={data.img}
                  className="about_gallery_img"
                />
              )
            })}
          </Slider>
        </div>
      </div>
      <div className="container-small">
        <div className="about_cont_bottom">
          <p className="general_paragraph">
          {content.aboutTextBottom}
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default About


export const useAboutQuery = () =>
  useStaticQuery(graphql`
    query AboutQuery {
      allFile(filter: {name: {eq: "content"}}) {
        nodes {
          childEnJson {
            aboutImage,
            aboutTitile,
            aboutText,
            aboutTExtStrong,
            aboutTextBottom,
            galleryAbout {
              img
            } 
          }
          childUkJson {
            aboutImage,
            aboutTitile,
            aboutText,
            aboutTExtStrong,
            aboutTextBottom,
            galleryAbout {
              img
            } 
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes