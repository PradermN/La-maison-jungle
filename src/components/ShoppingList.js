import React from "react";


const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

export default function ShoppingList(){

    return(

        <ul>

            {plantList.map((plant, index) => (

            <li key={index}>{ plant }</li>


            ))}

        </ul>


    )
}
