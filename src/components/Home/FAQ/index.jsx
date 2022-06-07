import React from 'react'
import { Typography,AccordionDetails ,AccordionSummary,Accordion } from '@mui/material';
import {useStyles} from "./FAQ.style"
import FaqAccordion from '../FaqAccordion';
import {Faqs} from "./data"

export default function FAQ() {
    const classes = useStyles()
  return (
    <>
    <div className={classes.faqMain}>
    <div className={classes.header}>
                <Typography
                variant="h3"
                component="h2"
                className={classes.heading}
            >
                Frequently Asked Questions
            </Typography>
        </div>
        <div className={classes.faqs}>

            {Faqs && Faqs.map((currentElement, index)=>{
                return(
                    <FaqAccordion key={index} question={currentElement.question} answer={currentElement.answer} />
                )
            })}
            

        <button className={classes.viewMoreBtn}>VIEW MORE</button>
        </div>
    </div>
    </>
  )
}
