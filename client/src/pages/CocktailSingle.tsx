import React, {FC, useEffect, useState} from "react";
import { cocktailDB, CocktailIngredient, CocktailData} from "../assets/cocktailObj.ts";
import { useSiteContext } from "../utils/GlobalState";

const CocktailSingle: FC<({})> = ({}) => {

    const [state, dispatch] = useSiteContext();
    const [currentCocktail, setCurrentCocktail] = useState<CocktailData>({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        findDisplayCocktail(state.display_cocktail);
        // console.log(cocktailDB);
    }, [isLoading]);

    function findDisplayCocktail(cocktailId) {
        cocktailDB.forEach((cocktail) => {
            if(cocktailId === cocktail.id) {
                console.log(cocktail)
                setCurrentCocktail(cocktail);
                setLoading(false);
            }
        });
    };

    const {cocktailName, tagLine, author, description, region, glassware, season, ingredients, instructions, postDate, image} = currentCocktail;

    if(isLoading) {
        return (
            <div className="flex flex-col min-h-screen px-2 pt-5 pb-10">
                Loading
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen px-2 pt-5 pb-10">
            <h1 className="section-header mx-2 mb-8">{cocktailName}</h1>
            <img src={process.env.PUBLIC_URL + `/images/${image}`} className='px-2'></img>
            {tagLine && <p className="mx-2 opacity-50 italic">{tagLine}</p>}
            <p className="self-end mx-3">By: <span>{author}</span></p>
            <p className="mx-2 mt-5 ">{description}</p>
            <p className="mx-2 mt-5">Region: {region}</p>
            <p className="mx-2">Glassware: {glassware}</p>
            <p className="mx-2">Season: {season}</p>
            <h2 className="subsection-header mx-2 mt-10">Ingredients</h2>
            <ul className="flex flex-col m-3 list-disc px-4">
                {ingredients.map((ingredient, index) => {
                    return (
                        <li key={index}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                    )
                })}
            </ul>
                    {/* <ul className="flex flex-col list-disc px-4">
                        <li>Sub Ingedient 1</li>
                        <li>Sub Ingedient 1</li>
                        <li>Sub Ingedient 1</li>
                    </ul> */}
            <h2 className="subsection-header mx-2 mt-10">Instructions</h2>
            <ul className="flex flex-col m-3 list-decimal px-4">
                {instructions.map((instruction, index) => {
                    return (
                        <li key={index} className="py-2">
                            {instruction}
                        </li>
                    )
                })}
            </ul>

        </div>
    )
};

export default CocktailSingle;