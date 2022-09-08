import React, {FC} from "react";

const CocktailSingle: FC<({})> = ({}) => {
    return (
        <div className="flex flex-col min-h-screen px-2 pt-5 pb-10">
            <h1 className="section-header mx-2 mb-8">Cocktail Name</h1>
            <img src={require('../assets/lorempic2.jpg')} className='px-2'></img>
            <p className="mx-2 opacity-50 italic">Optional Tag Line</p>
            <p className="self-end mx-3">By: Meghan McCaskill</p>
            <p className="mx-2 mt-5 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, alias! Quibusdam, repudiandae. Libero maiores odit ducimus itaque alias minima cum possimus pariatur nulla earum asperiores eos, nesciunt iste dolorem sunt.</p>
            <p className="mx-2 mt-5">Region: Central Florida</p>
            <p className="mx-2">Glassware: Martini</p>
            <p className="mx-2">Season: Fall</p>
            <h2 className="subsection-header mx-2 mt-10">Ingredients</h2>
            <ul className="flex flex-col m-3 list-disc px-4">
                <li>Ingredient 1</li>
                <li>Ingredient 2
                    <ul className="flex flex-col list-disc px-4">
                        <li>Sub Ingedient 1</li>
                        <li>Sub Ingedient 1</li>
                        <li>Sub Ingedient 1</li>
                    </ul>
                </li>
                <li>Ingredient 3</li>
                <li>Ingredient 4</li>
            </ul>
            <h2 className="subsection-header mx-2 mt-10">Instructions</h2>
            <ul className="flex flex-col m-3 list-decimal px-4">
                <li className="text-lg">
                    <h3 className="border-b border-sage-green inline-block">l;sakdfjsa;ldkfj</h3>
                    <p className="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo facilis debitis? Ea, eos esse. Esse, eius sunt inventore facere cupiditate impedit nobis ad debitis earum. Est earum facere libero?</p>
                </li>
            </ul>

        </div>
    )
};

export default CocktailSingle;