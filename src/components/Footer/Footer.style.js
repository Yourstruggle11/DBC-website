import { makeStyles } from '@mui/styles'
import background from "../../Assets/Footer/background.png"


export const useStyles = makeStyles(() => ({
    footerMain:{
        width: '100%',
        height: '100vh',
        paddingTop: '10rem',
        backgroundColor: '#F6F6F6',
        background: `url(${background})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    },
    footerImage:{
        width: '100%',
        height:'100%',
    }
  }))
  