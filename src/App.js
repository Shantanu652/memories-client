import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
// import { set } from 'mongoose';

const App = () => {

  return (

    <BrowserRouter>
    <Container maxwidth="lg">
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/auth' exact Component={Auth} />
      </Routes>
    </Container>
    </BrowserRouter>
  )
}

export default App