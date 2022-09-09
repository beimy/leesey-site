import React, { FC } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSiteContext } from "../../utils/GlobalState.js";
import { CHANGE_DISPLAY_COCKTAIL } from "../../utils/actions.js";
import { CocktailIngredient, CocktailData } from '../../assets/cocktailObj.js';

interface RecipeProps {
    cocktailName: string,
    region: string,
    author: string,
    mainSpirit?: string,
    id: number,
    tagLine?: string,
    description: string,
    glassware: string,
    season: string,
    ingredients: CocktailIngredient[],
    instructions: string[],
    postDate: string,
    originallyFrom?: string
};

const Recipe: FC<RecipeProps> = ({id, cocktailName, region, author, ingredients}) => {

    const [state, dispatch] = useSiteContext();
    const mainSpirit = ingredients[0].name;

    const navigate = useNavigate();

    function handleCardSelected(event, id) {
        event?.preventDefault();
        dispatch({type: CHANGE_DISPLAY_COCKTAIL, new_display_cocktail: id});
        navigate("../cocktail", { replace: false});
    }

    return (
        <div className="flex p-2 my-4 bg-sage-green">
            <img src={require(`../../assets/lorempic1.jpg`)} className='w-1/2' />
            <div className="p-1 flex flex-col align-middle justify-between">
                <div>
                    <p className="card-label">Name: <span className="card-text">{cocktailName}</span></p>
                    <p className="card-label">Region: <span className="card-text">{region}</span></p>
                    <p className="card-label">Author: <span className="card-text">{author}</span></p>
                    <p className="card-label">Main Spirit: <span className="card-text">{mainSpirit}</span></p>
                </div>
                <button onClick={(e) => handleCardSelected(e, id)} className="text-warm-white self-end border-b border-red-accent">Full Cocktail</button>
            </div>
        </div>
    );
};

export default Recipe;