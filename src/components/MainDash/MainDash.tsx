import React from "react"
import { Cards } from "../Cards/Cards"
import "./MainDash.css"




const MainDash: React.FC = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
    </div>

  )
}

export { MainDash }