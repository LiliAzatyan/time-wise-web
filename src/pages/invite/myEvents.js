import { styles } from "./style";
import React from "react";

export default function MyEvents({details, friends}) {
console.log(friends);

    return(
        <div style = {styles.component}>
            <h2>My Events</h2>
            <h3>Event Details</h3>
            <p>{details.title}</p>
            <p>{details.time}</p>
            <p>{details.isImportant ? 'Important Event' : 'Regular Event'}</p>
            <h3>Invited Friends</h3>
            {                
                // friends.map((friend, i) => (
                //     <div key = {i} style = {styles.event}>
                //         <p>{friend.name}</p>
                //     </div>
                // ))
            }      
      </div>
    )
} 