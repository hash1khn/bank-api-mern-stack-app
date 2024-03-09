import React, { useState } from "react";
import UsersList from "./UsersList";
import CreateNewUser from "./CreateNewUser";
import UserDetails from "./UserDetails";
import useSidebarState from "../hooks/useSidebarState.jsx";

import "./styles/Sidebar.style.css";

const Sidebar = ({ showUsersList, setShowUsersList }) => {
    const {
        selectedUser,
        currentAction,
        users,
        setUsers,
        handleUserSelection,
        handleAction,
    } = useSidebarState();

    return (
        <div className="sidebar">
            {/* <div className="menu"> */}
            {/* <div className="usersList"> */}
            {showUsersList && (
                <UsersList
                    selectedUser={selectedUser}
                    handleUserSelection={handleUserSelection}
                    users={users}
                    setUsers={setUsers}
                    currentAction={currentAction}
                    handleAction={handleAction}
                />
            )}
            {/* </div> */}
            {/* </div> */}
        </div>
    );
};

export default Sidebar;
