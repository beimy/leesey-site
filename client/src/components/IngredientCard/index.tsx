import React, {FC} from "react";


interface CardProps {
    id: number,
    name: string,
    sciName: string,
    region: string,
    season: string,
    img: string
};

const IngredientCard: FC<CardProps> = ({id, name, sciName, region, season, img}) => {
    return (
        <article className="cocktail-card">
            <a className="w-full shadow-md">
                <img src={require('../../assets/lorempic2.jpg')} alt={img} className=' w-full' />
            </a>
            <p className="card-label">Name:<span className="card-text">{name}</span></p>
            <p className="card-label">Scientific Name:<span className="card-text">{sciName}</span></p>
            <p className="card-label">Region:</p><span className="card-text">{region}</span>
            <p className="card-label">Season:</p><span className="card-text">{season}</span>
            <a className="w-fit self-end text-warm-white border-b">See more...</a>
        </article>
    )
};

export default IngredientCard;