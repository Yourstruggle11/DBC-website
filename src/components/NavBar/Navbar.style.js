import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles(() => ({
    navLogo: {
      position: 'relative',
      width: '7.5rem',
      left: '4.4vw',
      marginTop: '0.3rem',
      flexGrow: 1,
    },
    allNavItems: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      left: '30vw',
      width: '55vw',
      color: '#FE7624',
    },
    navItems: {
      color: '#FE7624 !important',
      flexGrow: 1,
      fontSize: '0.80rem !important', 
      fontWeight: '600 !important',
      margin: '0.3rem 3rem 0 !important',
    },
    navItems_Contact_us: {
        width: '11rem',
        height: '2.5rem',
        background: '#F2A365',
         borderRadius: '10rem',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         color: '#F5F5F5 !important',
    },
  }))
  