import React from "react";
import { showSubDropdown } from "./script";
import "../css/style2.module.css"

function DataAnalytics() {
    const showSubDropdown = () => {
        const subDropdown = document.getElementById("sub-dropdown-container");
        subDropdown.style.display = "block";
    };

    return (
        <div>
            <title>Data analytics and reports</title>
            <div className="heading">Data analytics and reports</div>
            <div className="container1">
                <div className="dropdown">
                    <label className="label" htmlFor="reports">
                        Reports :
                    </label>
                    <select id="reports" className="input-box" onChange={showSubDropdown}>
                        <option value="reading">Select a report</option>
                        <option value="reading">READING</option>
                        <option value="notifications">Notifications</option>
                        <option value="pop-up-notifications">Pop-up Notifications</option>
                        <option value="subtle-notifications">Subtle Notifications</option>
                        <option value="post-ideas">Post Ideas</option>
                        <option value="content-editor">Content Editor</option>
                        <option value="linkedin-page-views">Linkedin Page Views</option>
                        <option value="product-usage">Product Usage</option>
                        <option value="other-reports">Other reports</option>
                    </select>
                    <br />
                    <br />
                    <div id="sub-dropdown-container" className="sub-dropdown-container" style={{ display: 'none' }}>
                        <select id="sub-reports" className="input-box">
                            <option value>Select an option</option>
                        </select>
                    </div>
                    <br />
                </div>
                <div className="date">
                    <label className="label" htmlFor="period">
                        Period :
                    </label>
                    <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} id="from-date" name="from-date" className="input-box2" placeholder="From" />
                    <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} id="to-date" name="to-date" className="input-box2" placeholder="To" />
                    <br />
                    <br />
                    <label className="label" htmlFor="file-format">
                        File format :{" "}
                    </label>
                    <select id="file-format" className="input-box3">
                        <option value="excel">Excel</option>
                        <option value="pdf">PDF</option>
                    </select>
                    <br />
                    <button className="download-button" id="download-button">
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DataAnalytics;
