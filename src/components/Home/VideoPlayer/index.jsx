import React from 'react'
import {useStyles} from "./VideoPlayer.style"
import VideoPlayerOverLay from "../../../Assets/VideoPlayer/VideoPlayerOverLay.png"
import { Typography } from '@mui/material'

export default function VideoPlayer() {
    const  classes = useStyles()
  return (
    <>
    <div className={classes.videoPlayerMain}>
        <div className={classes.videoPlayerHeader}>
        <Typography variant='h4' body='h4' className={classes.heading}>Watch a short video to understand how we work</Typography>
        <Typography className={classes.subHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. </Typography>

        </div>
        <div className={classes.videoPlayer}>
            <img src={VideoPlayerOverLay} alt={VideoPlayerOverLay} className={classes.VideoPlayerOverLay} />
        </div>
    </div>
    </>
  )
}
