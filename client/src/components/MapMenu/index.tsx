import React, {FC} from 'react';
import { Menu } from '@headlessui/react';
import Draggable from 'react-draggable';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const MapMenu: FC<{}> = ({}) => {
    return (
        <Draggable>
            <Menu as={'div'} className='absolute inline-block text-left z-50'>
                <Menu.Button className='inline-flex w-full justify-center rounded-md bg-warm-white px-4 py-2 text-sm font-medium text-dark-grey hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                    Menu
                    <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </Menu>
        </Draggable>
    )
};

export default MapMenu;