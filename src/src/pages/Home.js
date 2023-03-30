import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <h1>WELCOME</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="./pages/DataAnalytics">DataAnalytics</Link></li>
                <li><Link to="./pages/ComparePrompts">ComparePrompts</Link></li>
                <li><Link to="./pages/RegenerateStat">RegenerateStat</Link></li>
                <li><Link to="./pages/UserManagement">UserManagement</Link></li>
                <li><Link to="./pages/VariantHistory">VariantHistory</Link></li>
            </ul>
        </div>




    )
}

export default Home;