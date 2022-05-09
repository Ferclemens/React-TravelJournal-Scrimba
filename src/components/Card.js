import React from "react"

export default function Card() {
    return (
        <article className="card--container">    
            <div>
                <img className="card--image" src="https://source.unsplash.com/WLxQvbMyfas"></img>
            </div>
            <div className="card--info">
                <div className="card--stats">
                    <img className="pin" src="./img/miniplaceholder.png"></img>
                    <h5 className="card--site">JAPAN</h5>
                    <h5 className="card--google--site">View on Google Maps</h5>
                </div>
                <div>
                    <h1 className="card--tittle">Mount Fuji</h1>
                    <p className="card--stay">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </article>
    )
}