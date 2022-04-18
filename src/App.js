import React from 'react'
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContex'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'

function App(){
  
    return (
        <FeedbackProvider>

            <Router>
                <Header />
                    <div className="container">

                        <Routes>
                            <Route exact path='/' element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats  />
                                    <FeedbackList/>
                                </>
                            }>
                            </Route>
                            <Route path='/about' element={<AboutPage/>}/>
                            <Route path='/post/*' element={<Post/>}/>
                        </Routes>
                        <AboutIconLink />
                    </div>

            </Router>
        </FeedbackProvider>
    )
}

export default App