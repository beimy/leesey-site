import React, {Fragment, FC} from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../../utils/GlobalState';
import { TOGGLE_ERROR_MODAL } from '../../utils/actions';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
};

interface NavProps {

};

const Nav: FC<NavProps> = ({}) => {

  const [state, dispatch] = useSiteContext();

  function toggleErrorModal() {
    dispatch({type: TOGGLE_ERROR_MODAL});
  };

  return (
      <Menu as="div" className="relative flex text-left p-2 justify-between bg-deep-green shadow-md">
        <div className=''>
          <Menu.Button className="inline-flex text-warm-white justify-center w-full shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-accent">
            Options
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute left-0 mt-10 w-56 shadow-lg bg-warm-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/foraging-site"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/cocktails"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Cocktails
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/encyclopedia"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Encyclopedia
                  </Link>
                )}
              </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/references"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      References
                    </Link>
                  )}
                </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
        <button className='inline-flex text-warm-white justify-center w-fit shadow-sm px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-accent'
          onClick={() => toggleErrorModal()}
        >
          Sign Up
        </button>
      </Menu>
    )
};

export default Nav;
