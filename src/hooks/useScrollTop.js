import { useEffect, useState } from 'react'
 
function useScrollTop( value) {
  const [scrollStarted, setScrollStarted] = useState(false)
  
  useEffect(() => {
     
    window.addEventListener('scroll', event => {
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
