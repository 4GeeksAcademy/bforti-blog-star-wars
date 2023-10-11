import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";


import "../../styles/home.css";


const Detalle = () => {
    const { nature, id } = useParams()
    const { store } = useContext(Context)
    const [characterDetail, setCharacterDetail] = useState({})
    const [planetDetail, setPlanetDetail] = useState({})
    const [vehicleDetail, setVehicleDetail] = useState({})

    
    const findCharacter = () => {
        const character = store.characters.find((item) => item._id == id)
        setCharacterDetail(character)
    }
    const findPlanet = () => {
        const planet = store.planets.find((item) => item._id == id)
        setPlanetDetail(planet)
    }
    const findVehicle = () => {
        const vehicle = store.vehicles.find((item) => item._id == id)
        setVehicleDetail(vehicle)
    }
    useEffect(() => {
        findCharacter()
    }, [store.characters])
    useEffect(() => {
        findPlanet()     
    }, [store.planets])
    useEffect(() => {
        findVehicle()
    }, [store.vehicles])
    let aux=""
    let auxImg=""
    
    if(nature=="characters"){
        aux=characterDetail;
        auxImg="characters"


    }
    else if(nature=="planets"){
        aux=planetDetail
        auxImg="planets"
    }
    else{
        aux=vehicleDetail
        auxImg="vehicles"
    }



    return (

        <>
            {aux?._id ? (<div className="container-fluid">
                <div className="body d-flex">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/${auxImg}/${aux.uid}.jpg`}
                        className="border rounded" />
                    <div className="ms-2">
                        <h2>{aux.properties.name}</h2>

                        <p>{aux.description}</p>
                    </div>



                </div>
                <div className="footer d-flex justify-content-center p-3">
                    <Link to="/">
                        <button type="button" class="btn btn-info">Volver a la página principal</button>
                    </Link>



                </div>








            </div>) : <div>loading...</div>}


        </>
    )

}









export default Detalle