import React from 'react'
import {useStyles} from "./BannerTwo.style"
import BannerTwoBackground from "../../../Assets/BannerTwo/BannerTwoBackground.png"

export default function BannerTwo() {
    const classes = useStyles()
  return (
    <>
        <div className={classes.bannerTwoMain}></div>
    </>
  )
}
