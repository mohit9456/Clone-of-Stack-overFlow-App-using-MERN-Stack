import React from 'react'
import {Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'

const Allroutes = () => {
  return (
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/Auth' Component={Auth}/>
      <Route exact path='/Questions' Component={Questions}/>
      <Route exact path='/AskQuestion' Component={AskQuestion}/>
      <Route exact path='/Questions/:id' Component={DisplayQuestion}/>
      <Route exact path='/Tags' Component={Tags}/>
      <Route exact path='/Users' Component={Users}/>
      <Route exact path='/Users/:id' Component={UserProfile}/>
    </Routes>
  )
}

export default Allroutes
