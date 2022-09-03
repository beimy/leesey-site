import React, {FC} from "react";
import MapComp from "../components/MapComp/index.tsx";

interface testProps {

};

const TestPage: FC<testProps> = ({}) => {
    return (
        <div className="w-[100px] h-[100px]">
            <MapComp />
        </div>
    );
};

export default TestPage;