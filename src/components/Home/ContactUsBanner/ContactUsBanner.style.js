import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles((theme) => ({
    ContactUsBannerMain:{
        width:'100% !important',
        height:'100vh   !important',
        background: '#F6F6F6',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 10rem',
    },
    Background:{
        position: 'absolute',
        width: '70%',
        height: '100%',
    },
    leftSide:{
        width: '50%',
        height: '100%',
        position: 'relative',
    },
    rightSide:{
        width: '50%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'flexStart',
        justifyContent: 'center',
    },
    Mobile:{
        width:'30rem',
        height:'34rem',
        zIndex: '5',
        position: 'absolute',
        left:'10rem',
        top:'5rem',
        // filter: 'drop-shadow(5px 5px 10px #000)',
        // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    },
    title:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '2rem',
        letterSpacing:' 0.1em',
        color: '#1F1F1F',
    },
    heading:{
        fontFamily: theme.typography.h1.fontFamily,
        fontStyle: 'normal !important',
        fontWeight: '600 !important',
        fontSize: '2rem !important',
        color: '#1F1F1F !important',
        marginBottom: '1rem !important',
    },
    detailsContainer:{
        width: '30rem',
        height:'7rem',
        paddingRight:'5rem',
    },
    details:{
        fontFamily: theme.typography.h1.fontFamily,
        fontStyle: 'normal !important',
        fontWeight: '100 !important',
        fontSize: '1.7rem !important',
        letterSpacing:' 0.03em !important',
        color: '#1F1F1F !important',

    },
    contactUsButton:{
        width: '10rem',
        height:'2.2rem',
        borderRadius:'1rem',
        border:'none',
        outline:'none',
        color:'#EE990D',
        fontFamily: theme.typography.h1.fontFamily,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '1rem',
        textrTansform: 'uppercase',
        marginTop:'5rem'
    }
  }))
  