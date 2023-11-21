import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

export default function UserPage() {
  let { id } = useParams();
  return (
    <div className="container">
      <h1>Hello there user {id}</h1>
      <p> Click on this <Link to="/">link</Link> to navigate to your Home Page.</p>
    </div>
  );
}