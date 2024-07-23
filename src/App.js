import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';

//import NotFound from './pages/NotFound';


import Login from './pages/Login';

const App = () => {

  return (
    <>
     <Login/>
    </>
  );
};
export default App;

