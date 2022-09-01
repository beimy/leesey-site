import React, {FC, useState} from "react";
import {Listbox} from '@headlessui/react';

interface EncycloProps {

}

const filters = [
    {id: 1, param: 'Browse'},
    {id: 2, param: 'Name'},
    {id: 3, param: 'Flavor'},
    {id: 4, param: 'Region'}
];

const EncycloPage: FC<EncycloProps> = ({}) => {
    const [selectedFilter, setSelectedFilter] = useState(filters[0]);

    return (
        <div className="p-2">
            <h1 className="inline-block text-2xl text-green-600 border-b border-green-600">Encyclopedia</h1>
            <div id="disclaimer" className="my-2 border-b border-slate-200 h-fit">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab recusandae optio temporibus? Ducimus vitae reprehenderit beatae maiores quia, unde nisi molestiae, odit provident corporis minus doloribus veniam itaque? Similique.</span>
                <button className="btn">Learn More</button>
            </div>
            <div id="search-sect" className="relative">
                <Listbox value={selectedFilter} onChange={setSelectedFilter}>
                    <Listbox.Label>Search by:</Listbox.Label>
                    <Listbox.Button>{selectedFilter.param}</Listbox.Button>
                    <Listbox.Options>
                        {filters.map((filter) => (
                            <Listbox.Option
                            key={filter.id}
                            value={filter}
                        >
                        {filter.param}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
        </div>
    )
};

export default EncycloPage;