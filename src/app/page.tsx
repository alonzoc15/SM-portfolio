import React from "react"
import HeroSec from "./home-sections/HeroSec"
import AboutSec from "./home-sections/AboutSec"
import ServicesSec from "./home-sections/ServicesSec"
import PortfolioSec from "./home-sections/PortfolioSec"
import FaqSec from "@/components/FaqSec"

const Home = () => {
  return (
    <>
      <HeroSec />
      <AboutSec />
      <ServicesSec />
      <PortfolioSec />
      {/* FAQ section  */}
      <section className="section">
        <FaqSec />
      </section>
    </>
  )
}

export default Home