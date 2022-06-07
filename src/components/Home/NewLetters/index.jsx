import React from 'react'
import {useStyles} from "./NewLetters.style"
import Vector from "../../../Assets/NewsLetters/Vector.png"
import VectorBg from "../../../Assets/NewsLetters/VectorBg.png"
import { Typography } from '@mui/material'


export default function NewLetters() {
    const classes = useStyles()
  return (
    <>
    <div className={classes.newsLettersMain}>
        <div className={classes.upperSection}>
                  <Typography className={classes.heading}>Don’t miss the best offers and updates  </Typography>
                  <Typography variant="h4"  className={classes.details}>We will keep you notified!</Typography>
                  <div className={classes.emailInputArea}>
                      <input  placeholder="Enter a valid email address" className={classes.emailInput}/>
                      <button className={classes.updatemeBtn}>UPDATE ME</button>
                  </div>
        </div>
        <div className={classes.lowerSection}>
            <img src={VectorBg} alt={VectorBg}  className={classes.VectorBg}/>
            <img src={Vector} alt={Vector} className={classes.Vector}/>
        </div>
    </div>
    </>
  )
}
