import React, {FC} from "react";

interface ReferenceProps {

};

const ReferencesPage: FC<ReferenceProps> = ({}) => {
    return (
        <div className="flex flex-col p-2">
            <h1 className="section-header my-2">References</h1>
            <p className="py-2">Please utilize this website as a tool to help guide you, but keep in mind, it is just that, a
                tool. NEVER INGEST ANYTHING UNLESS YOU ARE ABSOLUTELY SURE OF ITS VALIDITY. We hope
                this website can make location, identification, and inspiration a bit more accessible for our
                future aspiring foragers.
            </p>
            <p>Here you can find a list of Do's and Don'ts when it comes to finding your own food. You can also checkout some of the links below 
                for more information on foraging and cocktail creation. 
            </p>

            <h1 className="section-header my-4">Do's and Don'ts</h1>
            <h1 className="section-header my-4">Helpful Links</h1>
        </div>
    );
};

export default ReferencesPage;