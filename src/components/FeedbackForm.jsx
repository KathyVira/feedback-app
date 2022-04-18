import React from 'react'
import { useState , useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContex'



function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRaiting] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRaiting(feedbackEdit.item.rating)

        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at leest 10 characters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }
            if(feedbackEdit.edit === true){
                console.log("in edit true")
                updateFeedback(feedbackEdit.item.id, newFeedback)
                setText('')
                setBtnDisabled(true)
                feedbackEdit.edit = false
            }else{
                console.log("in edit false")
                addFeedback(newFeedback)
                setText('')
                setBtnDisabled(true)
            }
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}> 
            <h2>How woul you rate service with us?</h2>
            <RatingSelect select={(rating)=> setRaiting(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm

