import SearchFriends from "./searchFriends";
import CreateEvent from "./createEvent";
import React, {useState} from "react";
import MyEvents from "./myEvents";
import { styles } from "./style";
import { memo } from "react";

const Invite = () => {

    const [eventDetails, setED] = useState('');
    const [invitedFriends, setIF] = useState('')

    const handleEvent = (data) => {
        setED(data)
    }
    const handleInvites = (data) => {
        setIF(data)
    }

    return (
        <div>

        <div style = {styles.body}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <CreateEvent onUpdate={handleEvent} />
            <SearchFriends onUpdate={handleInvites} />
            <MyEvents details={eventDetails} friends={invitedFriends} />
        </div>
            <div
                style={{
                    marginLeft: "150px",
                    fontSize: "200px",
                }}
            >
                Comming Soon</div>
        </div>
    )
}
export default memo(Invite);