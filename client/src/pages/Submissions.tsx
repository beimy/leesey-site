import React, {FC} from "react";

interface SubmissionProps {
    
};

const SubmissionPage: FC<SubmissionProps> = ({}) => {
    return (
        <div className="p-2 flex flex-col">
            <h1 className="section-header">Cocktail Submission</h1>
            <span className="py-4 text-sm">Fill out the form below to have your own cocktail creation submitted for review. Your cocktail should make use of locally inspired ingredients that make your drink unique. After submitting, your submission will be reviewed to ensure quality and saftey standards. Once approved we will send you an email to review the final post before it goes on the site.</span>
            <form id="cocktail-submission" className="flex flex-col">
                <label className="input-label">Name</label>
                <input type='text' id="name" className="input-field"></input>
                <label className="input-label">Location of Cockail</label>
                <input type='text' id='location' className='input-field'></input>
                <label className="input-label">Recipe</label>
                <textarea id='recipe' className='input-field' rows={5}></textarea>
                <label className="input-label">Flavor Profile</label>
                <textarea id='flavors' className='input-field' rows={5}></textarea>
                <label className="input-label">Picture</label>
                <input type='file' id='picture' className='mb-2'></input>
                <label className="input-label">Inspiration</label>
                <textarea id='inspiration' className='input-field' rows={5}></textarea>
                <input type='submit' className="self-end btn mx-0"></input>
            </form>
        </div>
    );
};

export default SubmissionPage;