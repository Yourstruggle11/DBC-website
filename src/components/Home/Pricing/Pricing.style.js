import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    pricingMain:{
        width: '100%',
        height: '120vh',
        background: '#F6F6F6',
        padding:'10rem 10rem 0rem 10rem',
    },
    header:{
        width: '100%',
        height: '5rem',
    },
    heading:{
        textAlign:'center',
        // marginTop:'2rem !important',
        fontFamily: theme.typography.heading.fontFamily,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '3.5rem',
        lineHeight: '5rem',
        color:'#2B292D',
    },
    cardsContainer:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    featureCard:{
        width: '16rem',
        height: '37rem',
        borderRadius: '3rem',
        background: '#E5E5E5',
        paddingTop:'2rem',
        marginRight:'3.5rem',
    },
    featureCardHeading:{
        textAlign:'center',
        // marginTop:'2rem !important',
        fontFamily: theme.typography.heading.fontFamily,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '2rem',
        lineHeight: '5rem',
        color:'#2B292D',
    }
  }))
  