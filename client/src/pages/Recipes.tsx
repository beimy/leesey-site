import React, {FC, useState} from "react";
import Recipe from '../components/Recipe/index.tsx';
import { Listbox } from '@headlessui/react';


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
            <article className="bg-slate-200 w-screen p-2 flex justify-center">
                <div className="w-1/2 p-2">
                    <h2>Cocktail of the Week</h2>
                    <img src={require(`../assets/lorempic1.jpg`)}/>
                </div>
                <div className="w-1/2 p-2">
                    <h3 className="border-b border-black">The Rum-Spriggian</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis autem quisquam minima officiis ex odit repudiandae id est. Doloremque nam praesentium dolore debitis alias dolorem, itaque eius porro officia.</p>
                </div>
            </article>
            <div id="submission-sect" className="w-screen p-2 flex-col">
                <h2 className="text-xl">Want to submit a cocktail of your own?</h2>
                <p className="pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, beatae id? Ad aliquid mollitia sed laudantium facere dicta! Quod, adipisci possimus debitis magnam porro et a totam error nesciunt quas.</p>
                <button className="btn w-fit px-2 float-right">Submit</button>
            </div>
            <div id="recipe-list" className="p-2">
                <div id="search-filter-section" className="flex justify-between">
                    <input placeholder="Search" className="border border-black rounded px-2" />
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
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </div>
    )
};

export default RecipePage;