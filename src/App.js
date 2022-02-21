import React from 'react'
import{ HashRouter as Router, Route} from "react-router-dom"
import Navbar from "./navbar"
import Home from "./homepage/index"
import OverallMetrics from './overallmetrics/index'
import QualityMertics from './qualitymetrics/index'
import ClaimsMetrics from './claimsmetrics/index'
import PlatformMetrics from './platformmetrics/index'
import BillingMetrics from './billingmetrics/index'
import EnrollmentMetrics from './enrollmentmetrics/index'
import ProviderMetrics from './providermetrics/index'
import CommonMetrics from './commonmetrics/index'
import CareManagerMetrics from './caremanagermetrics/index'
import UnknownMetrics from './unknownmetrics/index'

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path ='/' component ={Home}/>
      <Route path='/overallmetrics' component ={OverallMetrics}/>
      <Route path ='/metrics' component ={QualityMertics}/>
      <Route path='/claims' component ={ClaimsMetrics}/>
      <Route path='/platform' component ={PlatformMetrics}/>
      <Route path='/billing' component ={BillingMetrics}/>
      <Route path='/enrollment' component ={EnrollmentMetrics}/>
      <Route path='/provider' component ={ProviderMetrics}/>
      <Route path='/common' component ={CommonMetrics}/>
      <Route path='/caremanager' component ={CareManagerMetrics}/>
      <Route path='/unknown' component ={UnknownMetrics}/>
    </Router>

  );
}

export default App;
