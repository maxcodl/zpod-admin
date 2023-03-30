import React from "react";

function ComparePrompts() {
    return (
        <div>
            <title>Compare between original &amp; final prompts</title>
            <link href="style2.css" rel="stylesheet" />
            <div className="heading">
                <h1>Compare between original &amp; final prompts</h1>
            </div>
            <div className="text-box-main" type="text" name="myInput" readOnly="true">Free flow</div>
            <div>
                <br />
                <div className="editor-space">
                    <div className="content_space">
                        <h2 className="heading1">Original Post</h2>
                        <br />
                        <h3 className="title">Post Heading</h3>
                        <br />
                        <textarea id="orignal_content" className="text-area" readOnly="true" defaultValue={"Post"} />
                        <div className="word-count" id="word-count1">Word count: </div>
                        <div className="emoji-count" id="emoji-count1">Emoji count: </div>
                    </div>
                    <div className="content_space">
                        <h2 className="heading2">Final output</h2>
                        <br />
                        <h3 className="title">Post Heading</h3>
                        <br />
                        <textarea id="generated_content" className="text-area" contentEditable defaultValue={"Post"} />
                        <div className="word-count" id="word-count2">Word count: </div>
                        <div className="emoji-count" id="emoji-count2">Emoji count: </div>
                    </div>
                </div>
                <div className="container">
                    <div className="box-container">
                        <div id="post-id">
                            <p>Post ID :</p>
                        </div>
                        <div id="user-id">
                            <p>User ID :</p>
                        </div>
                        <div id="url-link">
                            <p>URL Link :</p>
                        </div>
                        <div id="variants">
                            <p>No: of Variants :</p>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default ComparePrompts;