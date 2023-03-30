import React from "react";

function VariantHistory() {
    return (
        <div>
            <title>Variant History</title>
            <link href="style2.css" rel="stylesheet" />
            <div className="heading">
                <h1>Regenerate stat</h1>
            </div>
            <div className="heading" id>
                <p>Total Tokens consumed : </p>
            </div>
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
                        <h2 className="heading2">Final Variant Post</h2>
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
                        <br />
                        <div id="post-id">
                            <p>Post ID :</p>
                        </div>
                        <div id="user-id">
                            <p>User ID :</p>
                        </div>
                        <div id="url-link">
                            <p>Complete URL :</p>
                        </div>
                        <div id="variant-id">
                            <p>Variant ID :</p>
                        </div>
                    </div>
                    <div className="box-container-x">
                        <br />
                        <div id="post-id">
                            <p>No: of manual prompts :</p>
                        </div>
                        <div id="user-id">
                            <p>No: of tone prompts :</p>
                        </div>
                        <div id="url-link">
                            <p>No: of grade prompts :</p>
                        </div>
                        <div id="variant-id">
                            <p>No: of PoV Prompts :</p>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default VariantHistory;