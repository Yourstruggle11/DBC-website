import { makeStyles } from '@mui/styles'
import BannerTwoBackground from "../../../Assets/BannerTwo/BannerTwoBackground.png"


export const useStyles = makeStyles(() => ({
    bannerTwoMain:{
        width: '100%',
        height: '100vh',
        backgroundColor: '#F6F6F6',
        background: `url(${BannerTwoBackground})`,
        backgroundSize: '100% 100%',
    }
  }))
  