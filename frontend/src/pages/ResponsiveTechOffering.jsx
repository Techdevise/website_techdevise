import React, { useState, useEffect } from "react"
import TechOfferings from "./TechOfferings"
import MobileTechOffering from "../components/MobileTechOffering"

const ResponsiveTechOffering = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // You can adjust this breakpoint as needed
    }

    checkScreenSize()

    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  return isMobile ? (
    <main className="flex flex-col items-center justify-center p-0">
      <MobileTechOffering />
    </main>
  ) : (
    <TechOfferings />
  )
}

export default ResponsiveTechOffering
