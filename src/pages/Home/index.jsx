import React from 'react'
import NavBar from '../../components/NavBar'
import BannerOne from '../../components/Home/BannerOne'
import HeroSection from '../../components/Home/HeroSection'
import KeyFeatures from '../../components/Home/KeyFeatures'
import ContactUsBanner from '../../components/Home/ContactUsBanner'
import Pricing from '../../components/Home/Pricing'
import BannerTwo from '../../components/Home/BannerTwo'
import VideoPlayer from '../../components/Home/VideoPlayer'
import FAQ from '../../components/Home/FAQ'
import UserQuery from '../../components/Home/UserQuery'
import NewLetters from '../../components/Home/NewLetters'

export default function Home() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <KeyFeatures />
    <BannerOne />
    <ContactUsBanner />
    <Pricing />
    <BannerTwo />
    <VideoPlayer />
    <FAQ />
    <UserQuery />
    <NewLetters />
    </>
  )
}
