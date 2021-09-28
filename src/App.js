import React, {useState} from 'react'
import './App.css'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

const App = () => {

    const [mode, setmode] = useState('dark');

    const toggleMode = () => {
        if(mode === 'dark'){
            setmode('light')
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';            
        }else{
            setmode('dark')
            document.body.style.backgroundColor = '#10181f';
            document.body.style.color = 'white';
        }
    }

    return (
        <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <div className="container">
            <TextForm heading="Enter your text below: " mode={mode}/>
        </div>
        {/* // <About/> */}
        </>
    )
}

export default App;