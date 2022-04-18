import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContex'



function FeedbackList() {
const {feedback} = useContext(FeedbackContext)


    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
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

        // return (
        //     <div className='feedback-list'>
        //         {feedback.map((item)=>(
        //             <FeedbackItem key={item.id} item={item}
        //             handlDelete={handlDelete} />
        //             ))}
        //     </div>
        // )
}



// FeedbackList.propTypes = {
//     feedback: propTypes.arrayOf(
//         propTypes.shape({
//             id: propTypes.number.isRequired,
//             text: propTypes.string.isRequired,
//             rating: propTypes.number.isRequired,
//         })

//     )
// }

export default FeedbackList