import React from 'react'
import {useStyles} from "./BannerOne.style"
import Background from "../../../Assets/BannerOne/Background.png"
import Group from "../../../Assets/BannerOne/Group.svg"
import GroupBackground from "../../../Assets/BannerOne/GroupBackground.png"
import BannerOneLeft from "../../../Assets/BannerOne/BannerOneLeft.png"

export default function BannerOne() {
    const classes = useStyles()
  return (
      <div className={classes.BannerMain}>
          <div className={classes.background} style={{background:`url(${Background})`}}>
              <div className={classes.leftSide}>
              <img src={BannerOneLeft} alt={BannerOneLeft} srcset="" className={classes.BannerOneLeft}/>

              </div>
              <div className={classes.rightSide}>
                  <img src={GroupBackground} alt={GroupBackground} srcset="" className={classes.GroupBackground}/>
                  <img src={Group} alt={Group} srcset="" className={classes.Group}/>
              </div>
          </div>
      </div>
  )
}
