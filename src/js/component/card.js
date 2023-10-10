import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
	let {properties}=item

	return (

		<div className="my-card card" >
			<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg` }className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{properties.name}</h5>
				<p className="card-text">hair-color={properties.hair_color}</p>
				<p className="card-text">eye-color={properties.eye_color}</p>
                <p className="card-text">gender={properties.gender}</p>
              

				<Link to={`/characters/${item._id}`} className="btn btn-primary">Detalle</Link>
			</div>
		</div>
	)
}
