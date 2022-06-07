import { Typography } from '@mui/material';
import React from 'react'
import {useStyles} from './KeyFeatureCard.style'

export default function KeyFeatureCard({image,heading,footerText}) {
    const  classes = useStyles();
  return (
    <>
        <div className={classes.keyFeatureCard}>
        <Typography
            className={classes.keyFeatureCardHeading}
          >
             {heading}
          </Typography>
          <img src={image} alt={image} srcset="" className={classes.keyFeatureCardImage} />
          <Typography
            className={classes.keyFeatureCardFooterText}
          >
              {footerText}
          </Typography>
        </div>
    </>
  )
}
