import { useState, useEffect } from "react";
import { getUsers } from "../api/bankAPI.jsx";

const useSidebarState = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [currentAction, setCurrentAction] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((data) => setUsers(data))
            .catch((error) => {
                console.error("Error fetching users", error);
            });
    }, []);

    const handleUserSelection = (user) => {
        setSelectedUser((prevSelectedUser) =>
            prevSelectedUser && prevSelectedUser._id === user._id ? null : user
        );
        setCurrentAction("");
    };

    const handleAction = (action) => {
        setCurrentAction((prevCurrentAction) =>
            prevCurrentAction === action ? "" : action
        );
    };

    return {
        selectedUser,
        currentAction,
        users,
        setUsers,
        setSelectedUser,
        setCurrentAction,
        handleUserSelection,
        handleAction,
    };
};

export default useSidebarState;
