import React, {FC} from "react";

interface RecipeProps {
    name: string,
    location: string,
    creator: string,
    mainSpirit: string
};

const Recipe: FC<RecipeProps> = ({}) => {
    return (
        <div className="flex py-2">
            <img src={require(`../../assets/lorempic1.jpg`)} />
            <div className="p-1 flex flex-col align-middle justify-between">
                <div>
                    <h3>Name: The Testy Test</h3>
                    <p>Location: Testville, USA</p>
                    <p>Creator: Test McTester</p>
                    <p>Main Spirit: Whisky</p>
                </div>
                <a className=" self-end border-b border-black">Full Cocktail</a>
            </div>
        </div>
    );
};

export default Recipe;