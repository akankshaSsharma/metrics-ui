import React from 'react'
import LineChart from './graph'
import Footer from '../homepage/footer'
import Navbar from '../navbar'
import './styles.css'

const UnknownMetrics = () =>  {   
    return(
            <div>
                <Navbar/>
                <LineChart/>
                <br/><br/>
                <Footer/>
            </div>
    )
}

export default UnknownMetrics