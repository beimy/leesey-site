import React, {FC} from "react";
import {useSiteContext} from '../../utils/GlobalState.js';
import {TOGGLE_ERROR_MODAL} from '../../utils/actions';


interface CardProps {
    id: number,
    name: string,
    sciName: string,
    region: string,
    season: string,
    img: string
};

const IngredientCard: FC<CardProps> = ({id, name, sciName, region, season, img}) => {

    const [state, dispatch] = useSiteContext();

    function toggleErrorModal() {
        dispatch({type: TOGGLE_ERROR_MODAL})
    };

    return (
        <article className="cocktail-card">
            <a className="w-full shadow-md max-h-[50%]">
                <img src={require('../../assets/lorempic2.jpg')} alt={img} className='object-contain max-h-full max-w-full mx-auto' />
            </a>
            <p className="card-label">Name:<span className="card-text">{name}</span></p>
            <p className="card-label">Scientific Name:<span className="card-text">{sciName}</span></p>
            <p className="card-label">Region:</p><span className="card-text">{region}</span>
            <p className="card-label">Season:</p><span className="card-text">{season}</span>
            <button className="w-fit self-end text-warm-white border-b" onClick={toggleErrorModal}>See more...</button>
        </article>
    )
};

export default IngredientCard;