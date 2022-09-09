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
        <Dialog open={state.errorModalOpen} onClose={() => toggleErrorModal} className='relative z-100'>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className='bg-true-grey p-2 z-100 shadow-xl border-2 border-red-accent'>
                    <Dialog.Title className='section-header mb-2'>Thank You For Your Interest</Dialog.Title>
                    <Dialog.Description className='text-sm mb-2'>
                        This feature isn't quite finished yet, but we appreciate you checking out our site! Check back soon for updates. 
                    </Dialog.Description>

                    <p className='inline-block mt-5'>-Foraging Friend Team</p>

                    <button className='float-right inline-block btn' onClick={toggleErrorModal}>Close</button>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
};

export default ErrorModal;