import React from 'react'
import Headbar from './headbar'
import Footer from './footer'
import Navbar from '../navbar'

const Home = () =>  {   
    return(
            <div>
                <Navbar/>
                <Headbar/>
                <Footer/>
            </div>
    )
}

export default Home