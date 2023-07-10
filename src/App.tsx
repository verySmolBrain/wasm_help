// import { useState } from 'react'
import './App.css'
import { useYourOutput } from './components/Penguins';

function App() {
    const penguin_fact = useYourOutput()

    return (
        <div>
            { penguin_fact ? penguin_fact : 'Loading...' }
        </div>
    )
}

export default App
