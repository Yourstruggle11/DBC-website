import { Typography } from '@mui/material';
import React from 'react'
import {useStyles} from "./PricingCard.style"

export default function PricingCard({plantype,price}) {
    const classes = useStyles();

  return (
    <>
                <div className={classes.PricingCard}>
                    <div className={classes.header}>
                        <Typography
                        variant="h4"
                        component="h4"
                        className={classes.PricingCardHeading}
                    >
                        {plantype}
                    </Typography>
                    <Typography
                        className={classes.Price}
                    >
                        {price}
                    </Typography>
                    </div>
                
                <button className={classes.selectButton}> SELECT</button>
        </div>
    </>
  )
}
