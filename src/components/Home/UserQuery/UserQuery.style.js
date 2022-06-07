import { makeStyles } from '@mui/styles'
import Background from "../../../Assets/UserQuery/background.png"
import Path from "../../../Assets/UserQuery/Path.png"



export const useStyles = makeStyles((theme) => ({
    userQuery:{
    width: '100%',
    height: '100vh',
    backgroundColor: '#F6F6F6',
    background: `url(${Background})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
        display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
leftSide:{
    width: '50%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // background: 'red',
},
inputArea:{
    width: '35rem',
    height: '25rem',
    background: '#F6F6F6',
    boxShadow:' 0px 0px 10px rgba(0, 0, 0, 0.4)',
    borderRadius: '0.8rem',
    padding: '1rem'
},
inputField:{
    width: '100%',
    height: '90% !important',
    background: '#F6F6F6',
    resize: 'none !important',
    border: 'none !important',
    outline: 'none !important',
    color:'#C4C4C4',
    fontFamily: theme.typography.h1.fontFamily,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '1rem',
},
wordCounterContainer:{
    width: '100%',
    height: '10%',
    position: 'relative',
},
wordCounter:{
    position: 'absolute',
    right: '1rem',
    color: ' #C4C4C4;',
},
submitButton:{
    width: '12rem',
    height: '2.5rem',
    color:'#F2A365',
    marginTop: '1rem',
    border: '3px solid #F2A365',
    borderRadius: '1rem',
    background: 'transparent',
    cursor: 'pointer',
    
},
rightSide:{
    width: '50%',
    height: '100%',
    position: 'relative',
    background: `url(${Path})`,
    backgroundSize: '70% 70%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
contentImages:{
    width: '25rem',
    height: '12rem',
},
PathOneImages:{
    position: 'absolute',
    right: '2rem',
    bottom:'7rem'
}
  }))
  