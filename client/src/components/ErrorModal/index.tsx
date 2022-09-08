import React, { FC, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useSiteContext } from '../../utils/GlobalState';
import { TOGGLE_ERROR_MODAL } from '../../utils/actions';

const ErrorModal: FC<{}> = ({}) => {
    const [state, dispatch] = useSiteContext();

    function toggleErrorModal() {
        dispatch({ type: TOGGLE_ERROR_MODAL});
    }

    return (
        <Dialog open={state.errorModalOpen} onClose={() => toggleErrorModal}>
            <Dialog.Panel>
                <Dialog.Title>Thank You For Your Interest</Dialog.Title>
                <Dialog.Description>
                    This feature isn't quite finished yet, but we appreciate you checking out our site! Check back soon for updates. 
                </Dialog.Description>

                <p>-Foraging Friend Team</p>

                <button onClick={toggleErrorModal}>Close</button>
            </Dialog.Panel>
        </Dialog>
    )
};

export default ErrorModal;