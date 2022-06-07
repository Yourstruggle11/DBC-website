import React from 'react'
import {useStyles} from "./UserQuery.style"
import {  Typography,TextareaAutosize  } from '@mui/material'
import { countWords } from '../../../utils/WordCount'
import content from "../../../Assets/UserQuery/content.png"
import PathOne from "../../../Assets/UserQuery/PathOne.png"




export default function UserQuery() {
    const [wordCount, setWordCount] = React.useState(0)
    const [text, setText] = React.useState("")

    const   classes = useStyles()
  return (
    <>
    <div className={classes.userQuery}>
             <div className={classes.leftSide}>
                 <div className={classes.inputArea}>
                 <TextareaAutosize
                    maxLength={500}
                    aria-label="minimum height"
                    maxRows={150}
                    placeholder="Type here"
                    onChange={(e)=>{
                        setText(e.target.value);
                        setWordCount(countWords(text));
                    }}
                    value={text}
                    className={classes.inputField}
                    />
                    <div className={classes.wordCounterContainer}>
                        <Typography variant="body2" className={classes.wordCounter}>
                            {wordCount}/500
                            </Typography>
                    </div>
                 </div>
                 <button className={classes.submitButton}>Submit</button>
              </div>
              <div className={classes.rightSide}>
                  <img src={content} alt={'content'}  className={classes.contentImages} />
                  <img src={PathOne} alt={'PathOne'}  className={classes.PathOneImages} />
              </div>
    </div>
    </>
  )
}
