import React from 'react'
import {useStyles} from "./ContactUsBanner.style"
import Background from "../../../Assets/ContactUsBanner/Background.png"
import Mobile from "../../../Assets/ContactUsBanner/Mobile.png"
import {  Typography } from '@mui/material'

export default function ContactUsBanner() {
    const classes = useStyles()
  return (
   <>
   <div className={classes.ContactUsBannerMain}>
       <img src={Background} alt={Background}  className={classes.Background}/>
            <div className={classes.leftSide}>
                <img src={Mobile} alt={Mobile} className={classes.Mobile}/>
              </div>
              <div className={classes.rightSide}>
                  <p className={classes.title}>Create your</p>
                  <Typography className={classes.heading}>DIGITAL BUSINESS CARD  </Typography>
                  <div className={classes.detailsContainer}>
                  <Typography className={classes.details}>Just enter the information you want txo show on the card. Share anywhere, anytime on any Platform.</Typography>
                  </div>
                  <button className={classes.contactUsButton} >Contact Us</button>
              </div>
   </div>
   </>
  )
}
