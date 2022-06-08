import React from 'react'
import {useStyles} from "./Footer.style"
import icons from "../../Assets/Footer/icons.png"
import contactDetails from "../../Assets/Footer/contactDetails.png"
import map from "../../Assets/Footer/map.png"
import { Toolbar, Typography } from '@mui/material'


export default function Footer() {
    const classes = useStyles()
  return (
    <>
    <div className={classes.footerMain}>
        {/* <img src={footer} alt={footer}  className={classes.footerImage}/>  */}
        <div className={classes.footerUpper}>
        <div className={classes.leftSide}>
          <img src={contactDetails} alt={contactDetails} className={classes.contactDetails} />
          <img src={map} alt={map} className={classes.map} />

              </div>
              <div className={classes.rightSide}>
                <div className={classes.upperSection}>
                <Typography className={classes.heading}>About Us :  </Typography>
                  <div className={classes.detailsContainer}>
                  <Typography className={classes.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis neque, volutpat ac consequat sed, ullamcorper at dolor. Donec placerat a mi quis ultricies. Etiam egestas semper tempor. Suspendisse nec eros porta, rhoncus tortor sed, consequat arcu.</Typography>
                  </div>
                </div>
                <div className={classes.lowerSection}>
                <Typography className={classes.heading}>Follow us :    </Typography>
                  <div className={classes.IconsDetailsContainer}>
                    <img src={icons} alt={icons}  className={classes.icons}/>
                  </div>
                </div>
              </div>

        </div>
        <div className={classes.footerLower}>
          <div className={classes.footerContent}>
          <Toolbar style={{zIndex:'5'}}>
                  {/* Footer Header */}
                  <Typography variant="body2" className={classes.footerLogo}>
                  copyright@2022.Inc
              </Typography>
          <div className={classes.allFooterItems}>
            {/* ---------------Desktop View footer items-------------------------- */}

              <Typography variant="body2" className={classes.footerItems}>
              How it works
              </Typography>

              <Typography variant="body2" className={classes.footerItems}>
              Privacy Policy
              </Typography>

              <Typography variant="body2" className={classes.footerItems}>
              Terms of Services
              </Typography>
            {/* ---------------End of  Desktop View footer items-------------------------- */}
          </div>
     </Toolbar>
          </div>

        </div>
    </div>
    </>
  )
}
