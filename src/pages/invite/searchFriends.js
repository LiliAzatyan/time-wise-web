import React, { useState } from "react";
import { styles } from "./style";

const friends = [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Elen'},
        { id: 3, name: 'Max'},
        { id: 4, name: 'Ani'},
];
    
export default function SearchFriends(onUpdate) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value)
        // onUpdate(e.target.value)
    }

    const filtered = friends.filter(friend => {
        return (
            friend.name.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div style={styles.component}>
            <h2>Search Friends</h2>
            <input
                type='search'
                placeholder="Friend Name"
                styel={styles.pointer}
                value={search}
                onChange={handleSearch}
                id = 'search'
            />
            <label htmlFor = 'search'><i className="fa-solid fa-magnifying-glass" style={{ padding: '10px', cursor: 'pointer' }}></i></label>
            {
                filtered.length ?
                
                filtered.map((friend, i) => (
                    <div key = {i} style = {styles.event}>
                        <p>{friend.name}</p>
                        <input type='checkbox' style={styles.pointer} />
                    </div>
                )) : <p>No Friends Found</p>
            }
            <button style = {styles.pointer}>Invite</button>
        </div>
    )
}