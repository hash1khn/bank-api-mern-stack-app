import React, { useState } from "react";
import TransferFunds from "./TransferFunds";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const actionComponents = {
    transfer: TransferFunds,
    deposit: Deposit,
    withdraw: Withdraw,
};

const UserDetails = ({
    users,
    selectedUser,
    currentAction,
    handleAction,
    setCurrentAction,
}) => {
    const renderActionComponent = () => {
        const ActionComponent = actionComponents[currentAction];
        return ActionComponent && selectedUser ? (
            <div className="actionComponentContainer">
                <ActionComponent
                    users={users}
                    selectedUser={selectedUser}
                    setCurrentAction={setCurrentAction}
                />
            </div>
        ) : null;
    };

    return (
        <>
            {selectedUser && (
                <div className="usersDetails">
                    <h2>
                        {selectedUser.firstName} {selectedUser.lastName}
                    </h2>
                    <p>Email: {selectedUser.email}</p>
                    <button onClick={() => handleAction("transfer")}>
                        {currentAction === "transfer"
                            ? "Hide Transfer"
                            : "Transfer Funds"}
                    </button>
                    <button onClick={() => handleAction("deposit")}>
                        {currentAction === "deposit"
                            ? "Hide Deposit"
                            : "Deposit Cash"}
                    </button>
                    <button onClick={() => handleAction("withdraw")}>
                        {currentAction === "withdraw"
                            ? "Hide Withdraw"
                            : "Withdraw Cash"}
                    </button>
                </div>
            )}
            {renderActionComponent()}
        </>
    );
};

export default UserDetails;
