import React from "react";
import { showSubDropdown } from './script';
import "../css/style2.module.css"

function RegenerateStat() {
    return (
        <div>
            <title>Regenerate stat</title>
            <div className="heading">
                <h1>zpod dashboard</h1>
            </div>
            {/* Sidebar */}
            <div className="w3-sidebar w3-bar-block w3-border-right" style={{ display: 'none' }} id="mySidebar">
                <button onClick={() => { document.getElementById("mySidebar").style.display = "none" }} className="w3-bar-item w3-large">Close ×</button>
                <a className="w3-bar-item w3-button">History 1</a>
                <a className="w3-bar-item w3-button">History 2</a>
                <a className="w3-bar-item w3-button">History 3</a>
            </div>
            {/* Links and stuff */}
            <div className="container">
                <div className="box-container">
                    <div className="box" id="post-id">
                        <h2>POST ID :</h2>
                    </div>
                    <div className="box" id="user-id">
                        <h2>USER ID :</h2>
                    </div>
                    <div className="box" id="url-link">
                        <h2>URL LINK :</h2>
                    </div>
                </div>
                <textarea className="text-box" type="text" name="myInput" readOnly="true" defaultValue={"Prompt"} />
                <textarea className="box box-container container" type="text" name="myInput" contentEditable placeholder="Instruct ai on any important details" defaultValue={""} />
                <textarea className="box box-container container" type="text" name="myInput" contentEditable placeholder="Tone" defaultValue={""} />
            </div>
            <div className="change-perspective">
                <label htmlFor="changePerspective" style={{ display: 'inline-block' }}>
                    <span style={{ float: 'left' }}>Change Perspectiveㅤ</span>
                    <input className="check-box" type="checkbox" id="changePerspective" />
                </label>
            </div>
            <div>
                <br />
                <div className="editor-space">
                    <div className="content_space">
                        <h2 className="heading1">GPT output/orignal</h2>
                        <br />
                        <h3 className="title">Heading</h3>
                        <br />
                        <textarea id="orignal_content" className="text-area" readOnly="true" defaultValue={"Post"} />
                        <br />
                        <div id="word-count1">Word count : </div>
                        <div className="emoji-count" id="emoji-count1">Emoji count : </div>
                    </div>
                    <div className="content_space">
                        <h2 className="heading2">Final output</h2>
                        <br />
                        <h3 className="title">Heading</h3>
                        <br />
                        <textarea id="generated_content" className="text-area" contentEditable defaultValue={"Post"} />
                        <br />
                        <div id="word-count2">Word count : </div>
                        <div className="emoji-count" id="emoji-count2">Emoji count : </div>
                    </div>

                    <div className="button-container">
                        <button id="save-button" className="save-button">SAVE</button>
                        <br />
                        <button id="history-button" className="save-button" onclick="w3_open()">History</button>
                        <textarea type="number" className="button-container save-button" id="tone" contentEditable rows={1} placeholder="Grade" defaultValue={""} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegenerateStat;