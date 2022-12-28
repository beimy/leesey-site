import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';
import { TOGGLE_ERROR_MODAL } from '../utils/actions';
import ErrorModal from '../components/ErrorModal/index.tsx';


const DrawingsPage = () => {

    const [state, dispatch] = useSiteContext();

    function toggleErrorModal() {
        dispatch({type: TOGGLE_ERROR_MODAL})
    }

    return (
        <div className='flex flex-col justify-center'>
            Drawings
        </div>
        
    )
};

export default DrawingsPage;