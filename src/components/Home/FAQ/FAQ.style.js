import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles((theme) => ({
    faqMain:{
        width: '100%',
        height: '120vh',
        background: '#F6F6F6',
        paddingTop:'10rem'
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
        fontSize: '3rem',
        lineHeight: '5rem',
        color:'#2B292D',
    },
    faqs:{
        width: '100%',
        padding: '0rem 15rem',
        textAlign:'center'
        },
    viewMoreBtn:{
        width: '10rem',
        height: '2rem',
        background: '#F2A365',
        margin:'auto',
        border:'none',
        outline: 'none',
        borderRadius: '1rem',
        color: '#fff',
        cursor: 'pointer'
    }
  }))
  