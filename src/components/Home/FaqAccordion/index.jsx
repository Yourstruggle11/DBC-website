import React from 'react'
import { Typography,AccordionDetails ,AccordionSummary,Accordion } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useStyles} from "./FaqAccordion.style"


export default function FaqAccordion({question,answer}) {
    const classes = useStyles()
  return (
    <>
            <Accordion className={classes.Accordion} >
            <AccordionSummary
             className={classes.AccordionSummary}
                expandIcon={<AddIcon className={classes.expandmoreIcons} />}
            >
                <Typography className={classes.question}>{question}</Typography>
            </AccordionSummary>
             
            <AccordionDetails className={classes.AccordionDetails}>
                <Typography className={classes.answer}>
               {answer}
                </Typography>
            </AccordionDetails>
            </Accordion>
    </>
  )
}
