import React from 'react'
import {useStyles} from "./Footer.style"
import footer from "../../Assets/Footer/footer.png"


export default function Footer() {
    const classes = useStyles()
  return (
    <>
    <div className={classes.footerMain}>
        <img src={footer} alt={footer}  className={classes.footerImage}/>
    </div>
    </>
  )
}
