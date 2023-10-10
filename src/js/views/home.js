import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";



export const Home = () => {
	let { store } = useContext(Context)


	return (<>
		<div className="carrusel">
			<div className="d-flex ">
				{store.characters.map((item) => {

					return (
						<Card

							key={item._id}
							item={item} />

					)


				})}




			</div>
		</div>

		</>

	)


};
