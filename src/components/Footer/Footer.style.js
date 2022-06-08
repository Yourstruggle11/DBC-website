import { makeStyles } from '@mui/styles'
import background from "../../Assets/Footer/background.png"


export const useStyles = makeStyles((theme) => ({
    footerMain:{
        width: '100%',
        height: '100vh',
        // paddingTop: '10rem',
        backgroundColor: '#F6F6F6',
        background: `url(${background})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    },
    footerImage:{
        width: '100%',
        height:'100%',
    },
    footerUpper:{
        width:'100%',
        height:'80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-Between',
    },
    background:{
        width: '100%',
        height:'100%',
        // backgroundSize: '100% 100%',

    },
    leftSide:{
        width: '50%',
        height: '100%',
        padding: '3rem',
    },
    contactDetails:{
        width: '30rem',
        height: '10rem',
    },
    map:{
        width: '40rem',
        height: '20rem',
    },
    rightSide:{
        width: '50%',
        height: '100%',
        position: 'relative',
        // backgroundColor: 'red',
        padding: '10rem 2rem 3rem 2rem',
    },
    upperSection:{
        width: '100%',
        height:'65%',
        // backgroundColor: 'green',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    heading:{
        fontFamily: theme.typography.h1.fontFamily,
        fontStyle: 'normal !important',
        fontWeight: '600 !important',
        fontSize: '1rem !important',
        color: "#000000 !important",
    },
    detailsContainer:{
        width: "70%",
        marginLeft:'1rem'
    },
    details:{
        fontFamily: theme.typography.h1.fontFamily,
        fontStyle: 'normal !important',
        fontWeight: '300 !important',
        fontSize: '1.2rem !important',
        letterSpacing:' 0.03em !important',
        color: '#1F313D !important',

    },  
    lowerSection:{
        width: '100%',
        height:'35%',
        // backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    icons:{
        width: '15rem',
        height:'2rem',
        cursor: 'pointer',
    },
    IconsDetailsContainer:{
        width: "80%",
        marginLeft:'1rem',
    },
    footerLower:{
        width:'100%',
        height:'20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0rem',
    },
    footerContent:{
        width:'90%',
        height: '100%',
        borderTop: '1px solid black'
    },
    footerLogo: {
        position: 'relative',
        width: '7.5rem',
        marginTop: '0.3rem',
        flexGrow: 1,
      },
      allFooterItems: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      footerItems: {
        flexGrow: 1,
        fontSize: '0.80rem !important', 
        fontWeight: '600 !important',
        margin: '0.3rem 3rem 0 !important',
        cursor: 'pointer',
      },
  }))
  