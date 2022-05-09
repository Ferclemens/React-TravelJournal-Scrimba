import React from "react"

export default function Card(props) {
    return (
        <article className="card--container">    
            <div>
                <img className="card--image" src={props.item.imagen}></img>
            </div>
            <div className="card--info">
                <div className="card--stats">
                    <img className="pin" src="./img/miniplaceholder.png"></img>
                    <h5 className="card--site">{props.item.country}</h5>
                    <a className="card--google--site" href={props.item.maps}>View on Google Maps</a>
                </div>
                <div>
                    <h1 className="card--tittle">{props.item.place}</h1>
                    <p className="card--stay">{props.item.stay}</p>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
        </article>
    )
}