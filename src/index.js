import React from "react";
import ReactDOM from "react-dom";
import './style.css'
import profile from './profile.png'

ReactDOM.render (
    <body>
    <div className="frame">
        <h1>Valmo Trindade</h1>
        <h2>Dev</h2>
        <img src={profile} id="profile"/>
        <p>Um cara legal</p>
    </div>
    </body>,
    document.getElementById('root')
)