import React from 'react';
import {useStyles} from "./KeyFeatures.style";
import {
    Typography,
  } from '@mui/material'
import KeyFeatureCard from '../KeyFeatureCard';
import {cardDate} from "./data"

export default function KeyFeatures() {
    const  classes = useStyles();
  return (
    <>
        <div className={classes.keyfeatureMain}>
            <div className={classes.header}>
            <Typography
            variant="h3"
            component="h2"
            className={classes.heading}
          >
              Key Features
          </Typography>
            </div>
            <div className={classes.keyfeaturesContainer}>
                {cardDate && cardDate.map((currentElement,index)=>{
                    return(
                        <KeyFeatureCard key={index} image={currentElement.image} heading={ currentElement.heading} footertext={currentElement.footerText} />
                    )
                })}
            </div>
        </div>
   </> 
  )
}
