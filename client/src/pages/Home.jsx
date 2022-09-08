import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContext } from '../utils/GlobalState';
import ErrorModal from '../components/ErrorModal/index.tsx';


const Home = () => {

    const [state, dispatch] = useSiteContext();

    return (
        <div className='flex flex-col justify-center'>
            <article id='hero' className='hero h-screen flex-col'>
                <h1 className='self-center pb-5 text-red-accent text-4xl'>Foraging Friend</h1>
                <img src={require('../assets/ff_logo_round-02-modified.png')} alt='Site Logo Gnome' className='p-4 px-10'/>
                <p className='mb-10 px-5 text-center text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quaerat saepe deleniti excepturi culpa, reiciendis praesentium quod eum sit quis quo autem itaque neque! Maiores veritatis rem facilis laboriosam repellat!</p>
                <div className='flex flex-wrap justify-around'>
                    <Link to='/cocktails' className='flex hero-btn btn justify-center'>
                        <span className='self-center'>Recipes</span>
                    </Link>
                    <button className='hero-btn btn'>Interactive Map</button>
                    <Link to='/encyclopedia' className='flex hero-btn btn justify-center'>
                        <span className='self-center p-1'>Encyclopedia</span>
                    </Link>
                </div>
            </article>

            <div id='about-us-sect' className='w-screen p-2 my-10 flex justify-center flex-col'>
                <span className='section-header mb-1'>A Little About Us</span>                
                <p className='text-black text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio amet eaque doloribus pariatur est, modi sit vero eveniet illum qui suscipit quis inventore id quas dolore! Soluta, officiis ab?</p>
            </div>
            <div id='do-dont-sect' className='w-screen p-2 my-10 flex justify-center flex-col'>
                <span className='section-header mb-1'>Do's and Don'ts</span> 
                <p className='text-black text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio amet eaque doloribus pariatur est, modi sit vero eveniet illum qui suscipit quis inventore id quas dolore! Soluta, officiis ab?</p>
                <Link to='/references' className='btn self-end inline-block'>More Info</Link>
            </div>
            <div id='link-sect' className='w-screen p-2 my-10 flex justify-center flex-col'>
                <Link to='/cocktails' className='link-sect-btn'>
                    <h3 className='text-warm-white border-b inline-block'>Cocktail Recipes</h3> 
                    <p>Check out our library of locally foraged cocktails submitted by our users. All of the recipes have been checked to ensure saftey, and deliciousness!</p>    
                </Link>
                <Link to='/encyclopedia' className='link-sect-btn'>
                    <h3 className='text-warm-white border-b inline-block'>Ingredient Encyclopedia</h3>
                    <p>Search for inspiration in our foraging Encyclopedia. Find everything from herbs, mushrooms, fruits and vegitables in your local area.</p>    
                </Link>
                <Link to='/references' className='link-sect-btn'>
                    <h3 className='text-warm-white border-b inline-block'>References</h3> 
                    <p>Looking for more info on cocktails or foraging? Check out some of our helpful references here.</p>
                </Link>
            </div>
        </div>
        
    )
};

export default Home;