import CareScale from './CareScale'
import '../styles/PlantItem.css'


function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export default function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>

            {/* Cover a la valeur monstera partout et c'est le nom de l'image de la plante*/}

			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}

			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
