import React, {FC} from "react";

interface RecipeProps {
    name: string,
    location: string,
    creator: string,
    mainSpirit: string
};

const Recipe: FC<RecipeProps> = ({}) => {
    return (
        <div className="flex p-2 my-4 bg-sage-green">
            <img src={require(`../../assets/lorempic1.jpg`)} className='w-1/2' />
            <div className="p-1 flex flex-col align-middle justify-between">
                <div>
                    <p className="card-label">Name: <span className="card-text">The Testy Test</span></p>
                    <p className="card-label">Location: <span className="card-text">Testville, USA</span></p>
                    <p className="card-label">Creator: <span className="card-text">Test McTester</span></p>
                    <p className="card-label">Main Spirit: <span className="card-text">Whisky</span></p>
                </div>
                <a className="text-warm-white self-end border-b border-red-accent">Full Cocktail</a>
            </div>
        </div>
    );
};

export default Recipe;