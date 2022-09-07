import React, {FC, useState} from "react";
import Recipe from '../components/Recipe/index.tsx';
import { Listbox } from '@headlessui/react';
import { Link } from 'react-router-dom';


interface RecipePageProps {

};

const sortOptions = [
    'newest',
    'oldest'
]

const RecipePage: FC<RecipePageProps> = ({}) => {

    const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

    return (
        <div className="flex flex-col min-h-screen">
            <article className="hero p-2 py-10 flex justify-center">
                <div className="w-1/2 p-2">
                    <h2 className="section-header">Cocktail of the Week</h2>
                    <img src={require(`../assets/lorempic1.jpg`)} alt='Cocktail of The Week'/>
                </div>
                <div className="w-1/2 h-4/6 p-2 self-center">
                    <h3 className="border-b border-black text-red-accent">The Rum-Spriggian</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis autem quisquam minima officiis ex odit repudiandae id est. Doloremque nam praesentium dolore debitis alias dolorem, itaque eius porro officia.</p>
                </div>
            </article>

            <div id="submission-sect" className="w-screen my-10 p-2 flex-col">
                <h2 className="text-xl text-sage-green">Want To Submit A Cocktail Of Your Own?</h2>
                <p className="pt-6 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, beatae id? Ad aliquid mollitia sed laudantium facere dicta! Quod, adipisci possimus debitis magnam porro et a totam error nesciunt quas.</p>
                <Link to='/submit' replace={true} className="btn w-fit px-2 float-right">Submit</Link>
            </div>

            <div id="recipe-list" className="p-2 pb-10">
                <h2 className="section-header mb-4">Browse Cocktails</h2>
                <div id="search-filter-section" className="flex justify-between my-2">
                    <input placeholder="Search" className="border-black border-b bg-warm-white px-2 my-2 mr-2" />
                    <Listbox value={selectedSort} onChange={setSelectedSort}>
                        <Listbox.Label>Filter By:</Listbox.Label>
                        <Listbox.Button className='px-2'>{selectedSort}</Listbox.Button>
                        <Listbox.Options>
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