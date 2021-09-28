import React, {useState} from 'react'
import './App.css'
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

const App = () => {

    const [mode, setmode] = useState('dark');
    const [alert, setalert] = useState(null);

    const showAlert = (message,type) => {
        setalert({
                msg: message,
                type: type
            }
        )

        setTimeout(() => {
            setalert(null);   
        }, 1500);
    }

    const toggleMode = () => {
        if(mode === 'dark'){
            setmode('light')
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            showAlert("Light Mode Enabled", 'success')
                        
        }else{
            setmode('dark')
            document.body.style.backgroundColor = '#10181f';
            document.body.style.color = 'white';
            showAlert("Light Mode Disabled", 'success')
        }
    }

    return (
        <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
            <TextForm heading="Enter your text below: " mode={mode} showAlert={showAlert}/>
        </div>
        {/* // <About/> */}
        </>
    )
}

export default App;