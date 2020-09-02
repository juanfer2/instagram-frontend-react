import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
/*Redux */
import { useDispatch, useSelector } from 'react-redux'
import { env } from './contants/api.constant'

/** Actions */
import { healtAction } from './flux/actions/healt.action'

import Routes from './routes'
import Navbar from './components/navbar'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  useEffect(() => {
    const startHealtDispacht = () => dispatch(healtAction())
    startHealtDispacht()
    console.log(env)
  }, [])
  console.log(state)

  return (
    <div className="">
      <Router>
        <div className="container-app">
          <Navbar />
          <Routes />
        </div>
      </Router>
    </div>
  )
}

export default App
