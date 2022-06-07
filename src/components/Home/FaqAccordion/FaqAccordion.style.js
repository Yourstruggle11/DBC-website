import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles((theme) => ({
    expandmoreIcons:{
        color: '#F2A365',
    },
    Accordion:{
        marginBottom:'3rem !important',
        borderRadius:'1rem !important',
        border: '3px solid #F2A365 !important',
        // background: 'red !important',
    },
    question:{
        fontFamily: theme.typography.heading.fontFamily,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '1.5rem',
        color: '#F2A365 !important',
    },
    AccordionSummary:{
        height:'4rem !important',
        borderRadius:'1rem !important',
        // border: '3px solid #F2A365 !important',
        background: 'transparent !important',
        padding: '1rem !important',
        zIndex: '1 !important',
    },
    AccordionDetails:{
        background: "#F0F0F0 !important",
    },
    question:{  
        fontFamily: theme.typography.heading.fontFamily,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '1rem',
        color: '#000000',
    }
  }))
  