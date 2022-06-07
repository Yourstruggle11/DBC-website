import React from 'react'
import BannerOne from '../../components/Home/BannerOne'
import HeroSection from '../../components/Home/HeroSection'
import KeyFeatures from '../../components/Home/KeyFeatures'
import NavBar from '../../components/NavBar'

export default function Home() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <KeyFeatures />
    <BannerOne />
    </>
  )
}
