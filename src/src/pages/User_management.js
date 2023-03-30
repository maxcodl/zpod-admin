import React from "react";

function UserManagement() {
    return (
        <div>
            <title>User Management Dashboard</title>
            <link href="style3.css" rel="stylesheet" />
            <div className="heading">
                <h1>User Management Dashboard</h1>
            </div>
            <div className="container">
                <label htmlFor="user-id">User ID :</label>
                <input type="text" id="user-id" className="input-box" placeholder="Enter user id" required />
                <br />
                <label htmlFor="reason">Reason : </label>
                <select id="reason" className="input-box">
                    <option value="default">Select a report</option>
                    <option value="dumb">Dumb</option>
                    <option value="harrasment">Harrasment</option>
                    <option value="abusing-api">Abusing API</option>
                    <option value="is-a-witch">Is a Witch</option>
                    <option value="does-not-like-cat">Does not like cat</option>
                </select>
                <br />
                <br />
                <button id="block-button" className="action-button" onclick="showOptions('block')">Block User</button>
                <button id="delete-button" className="action-button" onclick="showOptions('delete')">Delete User</button>
                <div id="options" className="hidden">
                    <label htmlFor="time-period">Time period:</label>
                    <select id="time-period" className="input-box">
                        <option value="1day">One Day</option>
                        <option value="1week">One Week</option>
                        <option value="1month">One Month</option>
                        <option value="1month">Forever</option>
                    </select>
                    <br />
                    <button id="confirm-button" className="save-button" onclick="confirmAction()">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default UserManagement;