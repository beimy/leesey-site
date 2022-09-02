import React, {FC} from "react";

interface ReferenceProps {

};

const ReferencesPage: FC<ReferenceProps> = ({}) => {
    return (
        <div className="flex flex-col p-2">
            <h1 className="text-3xl text-green-600">References</h1>
            <p className="py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptatum in obcaecati. Aperiam nobis quia aliquam rem cupiditate assumenda tempora, officiis hic unde reprehenderit sint dolores inventore ullam. Ipsam, debitis.</p>
        </div>
    );
};

export default ReferencesPage;