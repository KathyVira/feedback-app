import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContex'
import Loader from './shared/Loader'



function FeedbackList() {
const {feedback, isLoading } = useContext(FeedbackContext)


    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>
    }
    return isLoading ? (<Loader/>) : (
        <div className='feedback-list'>
        <AnimatePresence>
            {feedback.map((item) => (
            <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
            >
                <FeedbackItem 
                key={item.id} 
                item={item} 
                
                />
            </motion.div>
            ))}
        </AnimatePresence>
    </div>
)

}



export default FeedbackList