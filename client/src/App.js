import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Content from './components/Content';
// import ProjectList from './components/ProjectList';


function App() {
  return (
    <div>
      <Nav></Nav>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App;
