import { Typography } from '@mui/material';
import React from 'react'
import PricingCard from '../PrincingCard';
import { pricingData } from './data';
import {useStyles} from "./Pricing.style"

console.log(pricingData);

export default function Pricing() {
    const classes = useStyles();
  return (
    <>
    <div className={classes.pricingMain}>
        <div className={classes.header}>
                <Typography
                variant="h3"
                component="h2"
                className={classes.heading}
            >
                Plans and Features
            </Typography>
        </div>
        <div className={classes.cardsContainer}>
            <div className={classes.featureCard}>
                    <Typography
                        variant="h4"
                        component="h4"
                        className={classes.featureCardHeading}
                    >
                        FEATURES
                    </Typography>
            </div>
            {pricingData && pricingData.map((currentElement, index)=>{
                return(
                    <PricingCard key={index} plantype={currentElement.plantype} price={currentElement.price} />
                )
            })}
        </div>

    </div>
    </>
  )
}
