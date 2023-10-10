import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

const Detalle = () => {
    const { nature, id } = useParams()
    const { store } = useContext(Context)
    const [characterDetail, setCharacterDetail] = useState({})
    const findCharacter = () => {


        const character = store.characters.find((item) => item._id == id)
        setCharacterDetail(character)

    }

    useEffect(() => {
        findCharacter()

    }, [store.characters])



    return (
        
        <>
        {characterDetail?._id  ? (<div className="container">
                <div className="body d-flex">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${characterDetail.uid}.jpg`} />

                <h2>{characterDetail?.properties.name}</h2>

                <p>{characterDetail.description}</p>
                
                
                </div>
                <div className="footer">


                </div>
            

               






            </div>) : <div>loading...</div>  }
            

        </>
    )

}









export default Detalle