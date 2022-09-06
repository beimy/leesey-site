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
        <article className="flex flex-col border border-black p-2 rounded flex-[0_1_48%] mb-2">
            <a className="w-full">
                <img src={require('../../assets/lorempic2.jpg')} alt={img} className=' w-full' />
            </a>
            <p>Name:<span>{name}</span></p>
            <p>Scientific Name:<span>{sciName}</span></p>
            <p>Region:</p><span>{region}</span>
            <p>Season:</p><span>{season}</span>
            <a className="w-fit self-end text-blue-500 border-blue-500 border-b">See more...</a>
        </article>
    )
};

export default IngredientCard;