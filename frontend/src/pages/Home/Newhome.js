import React from 'react'
import NewNavbar from '../../newcom/navbar'
import Slideshow from '../../newcom/slideshow'
import NewWelcome from '../../newcom/newwelcome'
import Courses from '../../newcom/courses'
import Vision from '../../newcom/vision'
import Footer from '../../newcom/newFooter'
import NewExploreMenu from '../../newcom/exploremenunew'


const Newhome = () => {
  return (
    <div>
      <NewNavbar/>
      <Slideshow/>
      <NewWelcome/>
      {/* <NewExploreMenu/> */}
      <Courses/>
      <Vision/>
      <Footer/>
    </div>
  )
}

export default Newhome
