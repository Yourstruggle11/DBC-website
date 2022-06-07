import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles((theme) => ({
    newsLettersMain:{
        width:'100% ',
        height:'100vh   ',
        background: '#F6F6F6',
    },
    upperSection:{
        width:'100% ',
        height:'50% ',
        paddingTop:'10rem',
        paddingLeft:'20rem',
    },
    details:{
        fontFamily: theme.typography.h1.fontFamily,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '2rem',
        color: '#1F1F1F',
        marginBottom:' 1rem',
    },
    emailInputArea:{
        width:'35rem',
        height:'3.5rem ',
        borderRadius:'1rem',
        background: '#FCFCFC',
        padding:'0.2rem',
        filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emailInput:{
        width:'70% !important',
        height:'100% !important',
        border: 'none !important',
        outline: 'none !important',
        background: '#FCFCFC !important',
        paddingLeft:'0.6rem !important',
        
    },
    updatemeBtn:{
        width:'30%',
        height:'100%',
        border: 'none',
        outline: 'none',
        background: '#F2A365',
        borderRadius:"1rem",
        color: 'white',
        cursor: 'pointer',
    },
    lowerSection:{
        width:'100% ',
        height:'50% ',
        position:'relative',
    },
    VectorBg:{
        position:'absolute',
        width:'45rem',
        height:'20rem',
        right:'2rem'
    },
    Vector:{
        position:'absolute',
        width:'45rem',
        height:'20rem',
        right:'2rem'
    }
  }))

  