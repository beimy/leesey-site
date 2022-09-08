import React, {FC, useState} from "react";
import { Link } from 'react-router-dom';
import { Listbox } from '@headlessui/react';
import { useSiteContext } from '../utils/GlobalState';
import { TOGGLE_ERROR_MODAL } from "../utils/actions";
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

    function toggleErrorModal() {
        dispatch({type: TOGGLE_ERROR_MODAL});
    };

    return (
        <div className="flex flex-col min-h-screen">
            <article className="hero p-2 py-5 flex flex-col justify-center">
                <h2 className="p-2 section-header border-0">Cocktail of the Week</h2>
                <div className="p-2 flex">
                    <img src={require(`../assets/lorempic1.jpg`)} alt='Cocktail of The Week' className="py-2 max-w-[50%]"/>
                    <div className="w-1/2 px-2 pb-2 self-center">
                        <h3 className="border-b border-black text-red-accent text-xl">The Rum-Spriggian</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis autem quisquam minima officiis ex odit repudiandae id est. Doloremque nam praesentium dolore debitis alias dolorem, itaque eius porro officia.</p>
                    </div>
                </div>
            </article>

            <div id="submission-sect" className="w-screen my-10 p-2 flex-col">
                <h2 className="text-2xl text-deep-green">Want To Submit A Cocktail Of Your Own?</h2>
                <p className="pt-6 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, beatae id? Ad aliquid mollitia sed laudantium facere dicta! Quod, adipisci possimus debitis magnam porro et a totam error nesciunt quas.</p>
                <Link to='/submit' replace={true} className="btn w-fit px-2 float-right">Submit</Link>
            </div>

            <div id="recipe-list" className="p-2 pb-10">
                <h2 className="section-header mb-4">Browse Cocktails</h2>
                <div id="search-filter-section" className="flex justify-between my-2">
                    <input placeholder="Search" className="border-black border-b bg-warm-white px-2 my-2 mr-2" onClick={toggleErrorModal} />
                    <Listbox value={selectedSort} onChange={setSelectedSort}>
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
                    </Listbox>
                </div>
                <div className="flex flex-col my-6 justify-between">
                    <Recipe />
                    <Recipe />
                    <Recipe />
                </div>
            </div>
        </div>
    )
};

export default RecipePage;