import React from "react";
import CardImage from "../CardImage";
import CardName from "../CardName";
import { useSelector } from "react-redux";

const Card = () => {

    const {authReducer} = useSelector((authState) => authState);

    return (
        <div>
            {
                authReducer.isLogin == false ? <h1>Data tidak ditemukan</h1> : (<div><CardName/><CardImage /></div>)
            }
        </div>
    )
}

export default Card;