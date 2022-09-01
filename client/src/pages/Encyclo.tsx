import React, { FC, useState } from "react";
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/solid';

interface EncycloProps {

}

const filters = [
    {id: 1, param: 'Browse'},
    {id: 2, param: 'Name'},
    {id: 3, param: 'Flavor'},
    {id: 4, param: 'Region'}
];

const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
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
            <div id="search-sect" className="flex mt-5 ">
                <Listbox value={selectedFilter} onChange={setSelectedFilter}>
                    <div>
                        <Listbox.Label className='py-2 m-1 text-sm'>Search by:</Listbox.Label>
                        <div className="relative mt-1">
                            <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                                <span className="block truncate">{selectedFilter.param}</span>
                                    
                            </Listbox.Button>
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
                        </div>
                    </div>
                </Listbox>
                <div className="mx-1">
                    <label className="m-1 text-sm">Search:</label>
                    <input type='text' id="search-field" className=" mt-2 input-field h-1/2" placeholder="e.g. Rosemary"></input>
                </div>
            </div>
            <div id='browse-alpha'>
                {alphabet.map((letter) => (
                    <button
                        id={`${letter}`}
                        key={letter}
                        className='alpha-btn'    
                    >{letter}
                    </button>
                ))};
            </div>
        </div>
    )
};

export default EncycloPage;