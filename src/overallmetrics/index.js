import React from 'react'
import LineChart from './graph'
import Footer from '../homepage/footer'
import Navbar from '../navbar'
//import DTPicker from './datetimepicker'
import './styles.css'

const OverallMetrics = () =>  {   
    return(
            <div>
                <Navbar/>
                <LineChart/>
                <br/><br/>
                <Footer/>
            </div>
    )
}

export default OverallMetrics