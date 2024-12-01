import React from "react";
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

export default function CareScale({scaleValue, careType}){

    const range = [1, 2, 3]
	const scaleType = careType === 'light' ? ( <img src={Sun} alt='sun-icon' /> ) : ( <img src={Water} alt='water-icon' /> )

    return(

        <div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>

            {/*Ici on itere sur chaque element de range 1, 2 et 3
            puis en fonction de la valeur du scalevalue on va afficer ca
            ce nbre de fois. ex scaleValue = 2 on aura deux affichage car
            2>=1 et 2>=2 */}

			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? ( <span key={rangeElem.toString()}>{scaleType}</span> ) : null )
			}

		</div>
    )

}
