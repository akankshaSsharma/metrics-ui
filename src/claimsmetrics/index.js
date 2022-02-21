import React from 'react'
import LineChart from './graph'
import Footer from '../homepage/footer'
import Navbar from '../navbar'
import './styles.css'

const ClaimsMetrics = () =>  {   
    return(
            <div>
                <Navbar/>
                <LineChart/>
                <br/><br/>
                <Footer/>
            </div>
    )
}

export default ClaimsMetrics