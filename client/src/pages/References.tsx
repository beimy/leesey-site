import React, {FC} from "react";

interface ReferenceProps {

};

const ReferencesPage: FC<ReferenceProps> = ({}) => {
    return (
        <div className="flex flex-col p-2 mb-20">
            <h1 className="section-header my-2">References</h1>
            <p className="py-2">Please utilize this website as a tool to help guide you, but keep in mind, it is just that, a
                tool. NEVER INGEST ANYTHING UNLESS YOU ARE ABSOLUTELY SURE OF ITS VALIDITY. We hope
                this website can make location, identification, and inspiration a bit more accessible for our
                future aspiring foragers.
            </p>
            <p>Here you can find a list of Do's and Don'ts when it comes to finding your own food. You can also checkout some of the links below 
                for more information on foraging and cocktail creation. 
            </p>

            <table className="table-fixed my-10">
                <thead>
                    <tr>
                        <th>Do's</th>
                        <th>Don'ts</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Do research your finds throughly.</td>
                    <td>Don't ever assume the identity of anything you find in the wild.</td>
                </tr>
                <tr>
                    <td>Do check the legality of foraging in your area. Some places have restrictions
                        in place.
                    </td>
                    <td>Don't pick anything from someone else's property without first asking, and recieving
                        permission to do so.
                    </td>
                </tr>
                <tr>
                    <td>Do take only what you need for your own personal use.
                    </td>
                    <td>Don't take everything in an area for yourself.
                    </td>
                </tr>
                <tr>
                    <td>Do exercise extra caution if you are pregnant, on medication, prone to
                        allergies, elderly, or have pre-existing conditions.
                    </td>
                    <td>Don't ever forage in cemeteries due to the risk of exposure to arsenic poisoning.
                    </td>
                </tr>
                <tr>
                    <td>Do invest in more research materials. Find websites and books with throughly researched 
                        information to help you identify your finds. Join local foraging groups to get real world 
                        experience and tips.
                    </td>
                    <td>Don't forage near where pesticides or other chemicals are used. Plants can carry pollutants
                        from these, as well as dog walking areas.
                    </td>
                </tr>
                </tbody>
            </table>

            <h1 className="section-header my-4">Helpful Links</h1>
            <p>Here are some links to some more informational materials for both foraging and cocktail making.</p>

            <h2 className="subsection-header my-4">Foraging Books</h2>
            <ul className=" list-disc">
                <li className="ml-5 my-1">
                    <a href="https://www.amazon.com/Forager-Handbook-Edible-Plants-Britain/dp/0091913632" target={'_blank'}>
                        The Forager Handbook: A Guide to the Edible Plants of Britain</a>
                </li>
                <li className="ml-5 my-1">
                    <a href="https://www.amazon.com/Food-Free-Collins-Richard-Mabey/dp/0007183038" target={'_blank'}>
                        Food For Free</a>
                </li>
                <li className="ml-5 my-1">
                    <a href="https://www.amazon.com/Edible-Wild-Plants-American-Natural/dp/1402767153/ref=sr_1_1?crid=TWG6KBCAQOPJ&keywords=Edible+Wild+Plants%3A+A+North+American+Field+Guide&qid=1662771330&s=books&sprefix=edible+wild+plants+a+north+american+field+guide%2Cstripbooks%2C85&sr=1-1" target={'_blank'}>
                        Edible Wild Plants: A North American Field Guide</a>
                </li>
                <li className="ml-5 my-1">
                    <a href="https://www.amazon.com/Complete-Herb-Book-Jekka-McVicar/dp/1554073650" target={'_blank'}>
                        Jekka's Complete Herb Book</a>
                </li>
            </ul>
            <h2 className="subsection-header my-4">Cocktail Books</h2>
            <ul className=" list-disc">
                <li className="ml-5 my-1">
                    <a href="https://www.amazon.com/Wild-Cocktails-Midnight-Apothecary-home-grown/dp/1782492003" target={'_blank'}>
                        Wild Cocktails From the Midnight Apothecary</a>
                </li>
            </ul>
            <h2 className="subsection-header my-4">Foraging Websites</h2>
            <ul className=" list-disc">
                <li className="ml-5 my-1">
                    <a href="https://www.eatweeds.co.uk/" target={'_blank'}>
                        www.eatweeds.co.uk</a>
                </li>
                <li className="ml-5 my-1">
                    <a href="www.gallowaywildfoods.com" target={'_blank'}>
                        www.gallowaywildfoods.com</a>
                </li>
            </ul>
            {/* <h2 className="subsection-header my-4">Cocktail Websites</h2> */}
        </div>
    );
};

export default ReferencesPage;