import React, {FC, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Listbox } from '@headlessui/react';
import { useSiteContext } from '../utils/GlobalState';
import { cocktailDB } from '../assets/cocktailObj.ts';
import { CHANGE_DISPLAY_COCKTAIL, TOGGLE_ERROR_MODAL } from "../utils/actions";
import Recipe from '../components/Recipe/index.tsx';

interface RecipePageProps {

};

const sortOptions = [
    'newest',
    'oldest'
]

const RecipePage: FC<RecipePageProps> = ({}) => {

    const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
    const [state, dispatch] = useSiteContext();
    const navigate = useNavigate();

    function toggleErrorModal() {
        dispatch({type: TOGGLE_ERROR_MODAL});
    };

    function handleNavFunc(event, cocktailId) {
        event?.preventDefault();
        dispatch({type: CHANGE_DISPLAY_COCKTAIL, new_display_cocktail: cocktailId})
        navigate("../cocktail", { replace: false});
        console.log(cocktailId);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <article className="hero p-2 py-5 flex flex-col justify-center" id="1" onClick={(e) => handleNavFunc(e, 1)}>
                <h2 className="p-2 section-header border-0">Featured Cocktail</h2>
                <h3 className="inline-block border-b w-fit border-black text-red-accent text-xl mx-2">Forged By Sunshine</h3>
                <div className="px-2 pb-2">
                    <img src={require(`../assets/lorempic1.jpg`)} alt='Cocktail of The Week' className="p-2 max-w-[50%] object-contain float-right"/>
                    <p className="text-lg pr-1 my-1">Our first featured drink created by site founder Meghan McCaskill. This play on a classic martini is a regional finalist for Bombay Sapphire's 'Most Imaginative Bartender' competition.</p>
                </div>
            </article>

            <div id="submission-sect" className="w-screen my-10 p-2 flex-col">
                <h2 className="text-2xl text-deep-green">Want To Submit A Cocktail Of Your Own?</h2>
                <p className="pt-4 text-justify">Feeling inspired? Submit you own foraged cocktail to be added to the site. Your drink will be reviewed for saftey, and then posted for all to see!</p>
                <button onClick={toggleErrorModal} className="btn w-fit px-2 float-right">Submit</button>
            </div>

            <div id="recipe-list" className="p-2 pb-10">
                <h2 className="section-header mb-4">Browse Cocktails</h2>
                <div id="search-filter-section" className="flex justify-between my-2">
                    <input placeholder="Search" className="border-black border-b bg-warm-white px-2 my-2 mr-2" onClick={toggleErrorModal} />
                    {/* <Listbox value={selectedSort} onChange={setSelectedSort}>
                        <Listbox.Label>Filter By:</Listbox.Label>
                        <Listbox.Button className='p-2 h-fit bg-true-grey'>{selectedSort}</Listbox.Button>
                        <Listbox.Options className='origin-top-left absolute left-0 mt-10 w-20 shadow-lg bg-true-grey ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {sortOptions.map((option) => (
                                <Listbox.Option
                                    key={option}
                                    value={option}
                                >
                                    {option}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Listbox> */}
                </div>
                <div className="flex flex-col my-6 justify-between">
                    {cocktailDB.map((cocktail) => {
                        return (
                            <Recipe
                                key={cocktail.id}
                                id={cocktail.id}
                                cocktailName={cocktail.cocktailName}
                                region={cocktail.region}
                                author={cocktail.author}
                                ingredients={cocktail.ingredients}
                            ></Recipe>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default RecipePage;