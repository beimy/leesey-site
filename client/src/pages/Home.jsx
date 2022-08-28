import React, { Fragment, useEffect } from 'react';
// import WrapperMap from '../components/WrapperMap.tsx';


const Home = () => {

    return (
        <div className='flex flex-col justify-center'>
            <article id='hero' className=' bg-slate-200 h-screen w-screen p-2 flex justify-center flex-col'>
                <h1 className='text-2xl self-center pb-10'>Welcome to <span className=' text-green-600'>Foraging Friend</span></h1>
                <p className=' '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quaerat saepe deleniti excepturi culpa, reiciendis praesentium quod eum sit quis quo autem itaque neque! Maiores veritatis rem facilis laboriosam repellat!</p>
                <div className='flex flex-wrap justify-around'>
                    <button className='hero-btn btn'>Recipes</button>
                    <button className='hero-btn btn'>Interactive Map</button>
                    <button className='hero-btn btn self-center'>Encyclopedia</button>
                </div>
            </article>
            <div id='about-us-sect' className='w-screen p-2 flex justify-center flex-col'>
                <span className='text-green-600 text-2xl'>A little about us 
                    <p className='text-black text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio amet eaque doloribus pariatur est, modi sit vero eveniet illum qui suscipit quis inventore id quas dolore! Soluta, officiis ab?</p>
                </span>                
            </div>
            <div id='do-dont-sect' className='w-screen p-2 flex justify-center flex-col'>
                <span className='text-green-600 text-2xl inline-block'>Do's and Don'ts
                    <p className='text-black text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio amet eaque doloribus pariatur est, modi sit vero eveniet illum qui suscipit quis inventore id quas dolore! Soluta, officiis ab?</p>
                </span> 
                <button className='btn self-end inline-block'>More Info</button>
            </div>
            <div id='link-sect' className='w-screen p-2 flex justify-center flex-col'>
                <button className='link-sect-btn'>Cocktail Recipes 
                    <p>Check out our library of locally foraged cocktails submitted by our users. All of the recipes have been checked to ensure saftey, and deliciousness!</p>    
                </button>
                <button className='link-sect-btn'>Ingredient Encyclopedia
                    <p>Search for inspiration in our foraging Encyclopedia. Find everything from herbs, mushrooms, fruits and vegitables in your local area.</p>    
                </button>
                <button className='link-sect-btn'>References 
                <p>Looking for more info on cocktails or foraging? Check out some of our helpful references here.</p>
                </button>
            </div>
        </div>
        
    )
};

export default Home;