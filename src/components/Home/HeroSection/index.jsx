import React from 'react'
import clsx from 'clsx'
import {
    Grid,
    Typography,
  } from '@mui/material'
  import { useStyles } from './HeroSection.style'
  import Carousel from 'react-elastic-carousel'
//   import 'react-multi-carousel/lib/styles.css'
import HomeAssets from '../../../Assets/Home/HomeAssets.png'
import Path from '../../../Assets/Home/Path.png'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 }
  ]

export default function HeroSection() {

    const Banners = [
        {id: 1, },
        { id: 2,},
        {id: 3,},
        {id: 4, },
      ]
    const classes = useStyles()
  return (
    <>
    <div className={classes.path}>
    <img
            className={classes.pathImage}
            src={Path}
            alt="path img"
          />
    </div>
    <Carousel infinite breakPoints={breakPoints}>
    {Banners.map(testimonial =>{
        return(
<div
        containerx
        justify="space-around"
        maxWidth="false"
        className={classes.scanFormGridContainer}
      >
        {/* Left Section */}
        <Grid item md={6} xl={6} lg={6} xs={12} className={classes.leftGrid}>
          <Typography
            variant="h3"
            component="h2"
            className={clsx(classes.heroHeading, classes.headingGradient)}
          >
            <span className={classes.DBCHeading}>
            Make your professional life easy with us
            </span>
          </Typography>
          <Typography className={classes.leftPara} variant="h6" component="p">
          STORE ALL IMPORTANT INFORMATION AT ONE PLACE
          </Typography>

        </Grid>
        {/* Right Section */}
        <Grid item md={6} xl={6} lg={6} xs={12} className={classes.leftGrid}>
          <img
            className={classes.heroImg}
            src={HomeAssets}
            alt="hero img"
          />
        </Grid>
      </div>
        )
    } )    }
        
    </Carousel>

    </>
  )
}
