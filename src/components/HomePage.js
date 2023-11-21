import React from "react";
import { Link } from "react-router-dom"

export default function HomePage() {
return (

   <div className="container">
      <h1>Hey from HomePage</h1>
      <p> Click on this <Link to="/user/siri">link</Link> to navigate to your User Page.</p>
    </div>
);
}