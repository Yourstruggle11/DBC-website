import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    PricingCard:{
        width: '16rem',
        height: '37rem',
        borderRadius: '3rem',
        background: '#fffff',
        paddingTop:'2rem',
        paddingBottom:'2rem',
        marginRight:'3.5rem',
        border:'1px solid #FE7624',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-Between',
    },
    PricingCardHeading:{
        textAlign:'center',
        // marginTop:'2rem !important',
        fontFamily: theme.typography.heading.fontFamily,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '2rem',
        lineHeight: '5rem',
        color:'#FE7624',
    },
    Price:{
        textAlign:'center',
    },
    selectButton:{
        width: '10.5rem',
        height:'2.5rem',
        background: '#F2A365',
        border: '1px solid #F2A365',
        outline: 'none',
        fontFamily: theme.typography.heading.fontFamily,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '1rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        color:'#F5F5F5',
        borderRadius:'1rem',
    }
  }))
  