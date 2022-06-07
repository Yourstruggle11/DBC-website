import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    path:{
        position: 'absolute !important',
        width:'100% !important',
        height:'100vh   !important',
      marginTop: '-4rem !important',
      zIndex: '-1 !important',
        
    },
    pathImage:{
        width:'50% !important',
        height:'100% !important',
        position: 'absolute !important',
        right: '0 !important',
    },
    scanFormGridContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      marginTop: '-4rem',
    },
    leftGrid: {
      position: 'relative',
    },
    leftPara: {
      maxWidth: '35rem',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      fontFamily: theme.typography.heading.fontFamily,
      color: '#1F1F1F',
      fontSize: '2.9rem !important',
      fontWeight:'700 !important',
      position: 'relative',
      top: '0.8vw',
      textAlign: 'justify',
      lineHeight: '3.5rem !important',
    },
    DBCHeading: {
    fontSize:'2.5rem',
    color: '#FE7624 !important',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',

    },
    heroImg: {
        width: '35rem',
        height: '20rem',    
    },
  }))
  