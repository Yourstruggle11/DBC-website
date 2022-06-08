import { makeStyles } from '@mui/styles'
import Background from "../../../Assets/VideoPlayer/Background.png"



export const useStyles = makeStyles((theme) => ({
videoPlayerMain:{
    width: '100%',
    height: '100vh',
    backgroundColor: '#F6F6F6',
    background: `url(${Background})`,
    backgroundSize: '70% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
},
videoPlayerHeader:{
    width: '100%',
    height:'4rem',
    padding: '5rem 15rem',
    marginBottom: '1rem',

},
heading:{
    fontFamily: theme.typography.h1.fontFamily,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '2rem',
    textAlign: 'center',
    color: '#1F1F1F',
},
subHeading:{
    fontFamily: theme.typography.h1.fontFamily,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '1rem',
    textAlign: 'center',
    color: '#777777;',
},
videoPlayer:{
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'5rem'
},
VideoPlayerOverLay:{
    width:'40rem',
    height:'20rem',
    cursor: 'pointer',
}
  }))
  