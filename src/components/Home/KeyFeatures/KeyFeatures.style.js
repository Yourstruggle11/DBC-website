import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    keyfeatureMain:{
        width: '100%',
        height: '100%',
        background: '#F6F6F6'
    },
    header:{
        width: '100%',
        height: '5rem',
    },
    heading:{
        textAlign:'center',
        marginTop:'2rem !important',
        fontFamily: theme.typography.heading.fontFamily,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '3.5rem',
        lineHeight: '5rem',
        color:'#2B292D',
    },
    keyfeaturesContainer:{
        width: '100%',
        height: '100%',
        margin:'2rem 0rem',
        padding: '0rem 8rem',
        display: 'flex',
        flexWrap: 'wrap',
    }
  }))
  