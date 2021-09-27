import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

const App = () => {
    return (
        <>
        <Navbar title="TextUtils" aboutText="About TextUtils"/>
        <div className="container">
            <TextForm heading="Enter your text below: "/>
        </div>
        </>
    )
}

export default App;