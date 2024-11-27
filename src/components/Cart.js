import React from "react";

export default function Cart(){

    const monsteraPrice = 85;
    const ivyPrice = 106;
    const flowerPrice = 150;

    return(
        <div>

            <h2>Panier</h2>
            <ul>
                <li>Monstera: {monsteraPrice}</li>
                <li>Lierre: {ivyPrice}</li>
                <li>Fleurs: {flowerPrice}</li>
            </ul>
            Total : {monsteraPrice + ivyPrice + flowerPrice}
        </div>
    );

}
