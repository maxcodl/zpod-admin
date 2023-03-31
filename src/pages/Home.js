import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="Bodytype">
            <h1>WELCOME</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="./DataAnalytics">DataAnalytics</Link></li>
                <li><Link to="./ComparePrompts">ComparePrompts</Link></li>
                <li><Link to="./RegenerateStat">RegenerateStat</Link></li>
                <li><Link to="./UserManagement">UserManagement</Link></li>
                <li><Link to="./VariantHistory">VariantHistory</Link></li>
            </ul>
        </div>




    )
}

export default Home;