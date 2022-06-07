import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
    keyFeatureCard:{
        width:'17em',
        height:'18rem',
        borderRadius:'2rem',
        backgroundColor:'#FFFFFF',
        marginLeft:'8rem',
        marginBottom:'5rem',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
    },
    keyFeatureCardHeading:{
        fontFamily: 'Work Sans !important',
        fontStyle: 'normal !important',
        fontWeight: '600 !important',
        fontSize: '1.2rem !important',
        // lineHeight: '25rem !important',
        textAlign: 'center !important',
        color: '#FE7624 !important',
    },
    keyFeatureCardImage:{
        width: '10rem',
        height: '10rem',
    },
    keyFeatureCardFooterText:{
        fontFamily: 'Work Sans !important',
        fontStyle: 'normal !important',
        // fontWeight: '600 !important',
        fontSize: '1rem !important',
        // lineHeight: '25rem !important',
        textAlign: 'center !important',
        color: '#1F313D !important',
    }
  }))
  