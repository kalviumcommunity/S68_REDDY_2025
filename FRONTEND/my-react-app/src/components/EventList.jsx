import { useEffect, useState } from "react";
import UserDropdown from "./UserDropdown";

function EventList() {
    const [selectedUser, setSelectedUser] = useState("");
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (selectedUser) {
            fetch(`http://localhost:3000/events/by-user/${selectedUser}`)
                .then((res) => res.json())
                .then((data) => setEvents(data))
                .catch((error) => console.error("Error fetching events:", error));
        }
    }, [selectedUser]);

    return (
        <div>
            <h2>Filter Events by User</h2>
            <UserDropdown onUserSelect={setSelectedUser} />
            <ul>
                {events.map((event) => (
                    <li key={event._id}>{event.name} - {event.location}</li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;