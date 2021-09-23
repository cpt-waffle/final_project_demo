import { useState } from 'react';
import './counter.css'

function Counter(props) {

    const [num, setNum] = useState(0);

    return <div> 
        <div className="counter">
            <h1>{num}</h1>
        </div>
        <button onClick={() => setNum(prev => prev + 1)}>+</button>
    </div>
}


export default Counter;