import React, {useState} from 'react';
import { styles } from './style';

export default function CreateEvent(onUpdate) {
    const [input, setInput] = useState('');

    const handleSearch = (e) => {
        setInput(e.target.value)
        onUpdate(e.target.value)
    }
    
    return (
            <div style = {styles.component}>
                <h2>Create Event</h2>
                <input placeholder='Event Title' />
                <textarea style={styles.textarea} />
                <label htmlFor='time'>Pick a time</label>
                <br />
                <input type='time' id='time' style={styles.pointer} />
                <br />
                <input type = 'checkbox' id = 'check' style={styles.pointer}></input>
                <label style={styles.pointer} htmlFor='check'>Important</label>
                <br />
            </div>
    )
}