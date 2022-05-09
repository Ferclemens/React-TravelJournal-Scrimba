import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {
    const dataItem = data.map(item =>{
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {dataItem}
        </div>
    )
}