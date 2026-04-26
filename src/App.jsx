

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Project from "./components/Project"
import Skill from "./components/Skills"
import Footer from "./components/Footer"

export default function App(){
return(
  <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Marquee></Marquee>
      <Project></Project>
      <Skill></Skill>
      <Footer></Footer>
  </div>
)
}