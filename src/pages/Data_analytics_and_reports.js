import React from "react";

function DataAnalytics() {
    return (

        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Data analytics and reports</title>
            <link rel="stylesheet" href="style4.css" />
            <div className="heading">Data analytics and reports</div>
            <div className="container">
                <div className="dropdown">
                    <label className="label" htmlFor="reports">Reports :</label>
                    <select id="reports" className="input-box" onChange="showSubDropdown()">
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
                    <label className="label" htmlFor="period">Period :</label>
                    <input type="text" onFocus="(this.type='date')" onBlur="(this.type='text')" id="from-date" name="from-date" className="input-box2" placeholder="From" /><input type="text" onFocus="(this.type='date')" onBlur="(this.type='text')" id="to-date" name="to-date" className="input-box2" placeholder="To" />
                    <br />
                    <br />
                    <label className="label" htmlFor="file-format">File format : </label>
                    <select id="file-format" className="input-box3">
                        <option value="excel">Excel</option>
                        <option value="pdf">PDF</option>
                    </select>
                    <br />
                    <button className="download-button" id="download-button">Download</button>
                </div>
            </div></div>
    )
}

export default DataAnalytics;