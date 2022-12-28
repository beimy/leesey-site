import React, {Fragment, FC} from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../../utils/GlobalState';
import { TOGGLE_ERROR_MODAL } from '../../utils/actions';
import { Menu, Transition } from '@headlessui/react';
import ErrorModal from '../ErrorModal/index.tsx';

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
      <Menu as="div" className="relative flex text-left p-2 justify-between align-middle shadow-md z-100">
          <Menu.Button as='img' alt='Leesey Logo'
            className="inline-flex text-warm-white justify-center shadow-sm w-[15%] p-1 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-accent">
          </Menu.Button>
        <ul className='p-2 '>
          <Link className='nav-link' to={"/paintings"}>Paintings</Link>
          <Link className='nav-link' to={"/drawings"}>Drawings</Link>
          <Link className='nav-link' to={"/lowdown"}>Lowdown</Link>
          <Link className='nav-link' to={"/CV"}>CV</Link>
        </ul>
      </Menu>
    )
};

export default Nav;
