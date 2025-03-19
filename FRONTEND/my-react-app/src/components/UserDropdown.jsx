import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function UserDropdown({ onUserSelect }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <select onChange={(e) => onUserSelect(e.target.value)}>
            <option value="">Select a User</option>
            {users.map((user) => (
                <option key={user._id} value={user._id}>{user.name}</option>
            ))}
        </select>
    );
}
UserDropdown.propTypes = {
    onUserSelect: PropTypes.func.isRequired,
};

export default UserDropdown;