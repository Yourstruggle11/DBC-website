import React from 'react'
import NavBar from '../../components/NavBar'
import BannerOne from '../../components/Home/BannerOne'
import HeroSection from '../../components/Home/HeroSection'
import KeyFeatures from '../../components/Home/KeyFeatures'
import ContactUsBanner from '../../components/Home/ContactUsBanner'
import Pricing from '../../components/Home/Pricing'

export default function Home() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <KeyFeatures />
    <BannerOne />
    <ContactUsBanner />
    <Pricing />
    </>
  )
}
