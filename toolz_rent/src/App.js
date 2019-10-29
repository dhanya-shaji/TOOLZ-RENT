import React from 'react';
import './App.css';
import Sidebar from "./Container/layout/Sidebar"
import Header from "./Container/layout/Header"

function App() {
  return (
    <div>
<div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
      <Header/>
      <div>
        <Sidebar/>
        </div>
      </div>
     
    </div>
    
  )
}

export default App;
