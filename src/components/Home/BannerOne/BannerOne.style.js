import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
    BannerMain:{
        width: '100%',
        height: '100vh',
        background: '#F6F6F6'

    },
    background:{
        width: '100%',
        height:'100%',
        backgroundSize: '100% 100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-Between',
    },
    leftSide:{
        width: '50%',
        height: '100%',
    },
    rightSide:{
        width: '50%',
        height: '100%',
        position: 'relative',
    },
    BannerOneLeft:{

    },
    GroupBackground:{
        position: 'absolute',
        top:'6rem',
        left:'4rem',
        overflow: 'hidden !important' ,
    },
    Group:{
        position: 'absolute',
        top:'6rem',
        left:'6rem',
        width:'30rem',
    }
  }))
  