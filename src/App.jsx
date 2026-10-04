import { useEffect, useState } from "react"
import "./App.css"
import ContainerOne from "./components/ContainerOne"
import ContainerTwo from "./components/ContainerTwo"
import ContainerThree from "./components/ContainerThree"
import ContainerFour from "./components/ContainerFour"
import ContainerFive from "./components/ContainerFive"
import ContainerSix from "./components/ContainerSix"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div>
      <Header />
      <ContainerOne />
      <ContainerTwo />
      <ContainerThree />
      <ContainerFour />
      <ContainerFive />
      <ContainerSix />
      <Footer />

      {showScrollTop && (
        <button
          type="button"
          className="scrollTopButton"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App
