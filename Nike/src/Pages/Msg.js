import React from 'react'
import './Styles/Msg.css';
import { Link } from 'react-router-dom';

export default function Msg() {
  return (
        <div>
            <div className="msg">
                <h3>Hello Nike App</h3>
                <p>Download the app to access everything Nike. <Link to="/">Get Your Great</Link></p>
            </div>
        </div>
  )
}
