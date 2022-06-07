import React from 'react'
import {useStyles} from "./BannerTwo.style"

export default function BannerTwo() {
    const classes = useStyles()
  return (
    <>
        <div className={classes.bannerTwoMain}></div>
    </>
  )
}
