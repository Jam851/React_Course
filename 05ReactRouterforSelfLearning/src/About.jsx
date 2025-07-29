import axios from 'axios';
import { useState } from 'react'

function About(){
    const [data, setData] = useState(null)

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/')
        setData(res.data.message)
    }

    return (
        <>
        <h1>About Page</h1>
        <button onClick={fetch}>Unlock Message</button>
        <div>{data}</div>
        </>
    )
}

export default About