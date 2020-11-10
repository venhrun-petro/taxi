import React, { useState } from 'react'
import Img from '~c/general/Image'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"
 
function Slider() {
  const content = Content(useSliderQuery())
  const [ opacityCount, setOpacityCount ] = useState(0);
  const [ activeCount, setactiveCount ] = useState(0);

  const slider = content.items
  const step = 0.333333
  
  const opacity = (index) => 1 - (index * step) - opacityCount
  const scale = (index) => 1 - (index*0.1) + (activeCount*0.1)
  const left = (index) => index * 20 - (activeCount * 20)
  const zIndex = (index) => slider.length - index - activeCount + slider.length
 
  const styleItems = (index) => {
    return {
      opacity: opacity(index) <= 1 ? opacity(index) : 0,
      zIndex: zIndex(index) <= ((slider.length - activeCount) * 2) ? zIndex(index) : 0
    }
  }

  const styleImg = (index) => {
   return { 
          transform: `scaleY(${
            scale(index) <= 1 ? scale(index) : 0.9
            })`,
            left: left(index) > 0 ? left(index) : 0
          }
  }
 
  const slidePrev = () => {
    if(opacityCount < 0){
     setOpacityCount(opacityCount + step)
     setactiveCount(activeCount - 1)
    }
  }
  const slideNext = () => {
    if(opacityCount >= 0 - ((slider.length - 2)* step)){
      setOpacityCount(opacityCount - step)
      setactiveCount(activeCount + 1)
    }
  }

  const chekItems = (sign) => slider[activeCount + sign]

  return(
    <>
      <section className="slider" id="comments">
        <div className="container">
          <h2 className="sub-title" >Відгуки клієнтів</h2>
          <div className="slider_cont">
            { slider.map(function(item, index){
                  return(
                    <div key={index} className={ "slider_cont_list " + (index == activeCount ? "slider_cont_list-active" : null)
                    } 
                    style={styleItems(index)} > 
                      <div className="slider_cont_list_column">
                        <h3 className="slider_cont_list_column_title">{item.title}</h3>
                        <p className="general_paragraph">{item.paragraph}</p>
                      </div>
                      <div className="slider-img-cont">
                      <Img style={styleImg(index)} className="slider_cont_list_img" src={item.img} />
                      </div>
                    </div> 
                  )
              })
            }
          </div>
          <div className="slider_cont_button">
            <button className={"slider_cont_button_btn " + (!chekItems(-1) ? "disabled" : "" )} onClick={slidePrev} disabled={ chekItems(-1)
              ? false
              : true
              }>
                { chekItems(-1) ? 
                  <Img className="slider_cont_button_btn_img" src={chekItems(-1).img} />
                  : 
                  null
                }
                <div className="slider_cont_button_btn_info">
                  <p className="slider_cont_button_btn_info_text">PREV</p> 
                  {
                    chekItems(-1) ? 
                    <p className="slider_cont_button_btn_info_text">{chekItems(-1).title}</p>
                    : 
                    null
                  }
                </div>
            </button>
            <button className={"slider_cont_button_btn " + (!chekItems(+1) ? "disabled" : "" )} onClick={slideNext} disabled={ chekItems(+1)
              ? false
              : true
              }  >
                 { chekItems(+1) ? 
                    <Img className="slider_cont_button_btn_img" src={chekItems(+1).img} />
                    : 
                    null
                  }
                <div className="slider_cont_button_btn_info">
                  <p className="slider_cont_button_btn_info_text">NEXT</p> 
                  { chekItems(+1) ? 
                    <p className="slider_cont_button_btn_info_text">{chekItems(+1).title}</p>
                    : 
                    null
                  }
                </div>
            </button> 
          </div>
        </div>
      </section>
    </>
  )
}


export default Slider


export const useSliderQuery = () =>
  useStaticQuery(graphql`
    query SliderQuery {
      allFile(filter: {name: {eq: "content"}}) {
        nodes {
          childEnJson { 
            items {
              value
              title
              img
              paragraph
            }
              
          }
          childUkJson { 
            items {
              value
              title
              img
              paragraph
            } 
              
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes