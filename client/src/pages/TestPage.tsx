import React, {FC} from "react";
import MapComp from "../components/MapComp/index.tsx";

interface testProps {

};

const TestPage: FC<testProps> = ({}) => {
    return (
        <div className="flex justify-center p-2 min-h-full min-w-full">
            <MapComp />
        </div>
    );
};

export default TestPage;