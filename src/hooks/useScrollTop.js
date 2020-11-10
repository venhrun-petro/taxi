import { useEffect, useState } from 'react'
 
function useScrollTop(element, value) {
  const [scrollStarted, setScrollStarted] = useState(false)

  useEffect(() => {
    if (element === undefined) {
      element = window
    }
    element.addEventListener('scroll', event => {
      if (event.currentTarget.pageYOffset >= value) {
        setScrollStarted(true)
      } else {
        setScrollStarted(false)
      }
    })
  }, [])
  return{
    scrollStarted
  }
}

export default useScrollTop
