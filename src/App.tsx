import React from 'react';
import skybackground from './img/sky-background-2.jpg';
import './App.css';

function App() {
    return (

        <section style={{ backgroundImage: `url(${skybackground})` }} className='h-screen flex items-center justify-center flex-col'>

            <div className='w-9/12 h-6/12 flex flex-col justify-around place-self-center rounded-xl bg-background-color'>

                <div className='w-full h-6/12 flex flex-col justify-center place-self-center bg-foreground-color rounded-t-xl text-center rounded-3xl shadow-bottomOnly'>

                    <div className='bg-foreground-color rounded-t-2xl text-xl'>
                        <form action="/" method="post">
                            <input className='h-9 w-4/5 rounded-t-lg' type="search" name="search" id="search" />
                            <button className='h-15 w-1/5' type="submit">Search</button>
                        </form>

                    </div>
                    <div className='pt-8 pb-3'>
                        <p className="font-bold text-2xl">Antwerpen</p>
                        <p className='text-text-faded text-xl'>Saturday, 23-06-2023</p>
                    </div>
                    <div>
                        <h2 className='text-7xl pb-4'>18<span className='text-3xl'>&deg;c</span></h2>
                        <img src="" alt="" />
                        <p>Sunny</p>

                    </div>
                    <div className='bg-pale-blue-color rounded-3xl w-11/12 place-self-center mb-4 mt-4 max-h-20 p-1 shadow-lg'>
                        <div className='flex flex-row gap-4 justify-center'>
                            <p>H: 22&deg;</p>
                            <p>L: 16&deg;</p>
                        </div>
                        <div>
                            <p className='p-1'>Humidity: 75%</p>
                            <p className='p-1'>Wind: 5 kph N</p>
                        </div>

                    </div>
                </div>
                <div className="h-full w-full flex flex-row justify-evenly place-self-center mt-3 mb-3">

                    <div className='bg-pale-blue-color p-2 rounded-full h-full shadow-lg'>
                        <p className='p-2 text-center'>Sun</p>
                        <p className='p-2 text-center'>23&deg;</p>
                        <p className='p-2 text-center text-text-faded' id="forecase-day-min">16&deg;</p>
                    </div>
                    <div className='bg-pale-blue-color p-2 rounded-full h-full shadow-lg'>
                        <p className='p-2 text-center'>Mon</p>
                        <p className='p-2 text-center'>23&deg;</p>
                        <p className='p-2 text-center text-text-faded' id="forecase-day-min">16&deg;</p>
                    </div>
                    <div className='bg-pale-blue-color p-2 rounded-full h-full shadow-lg'>
                        <p className='p-2 text-center'>Tues</p>
                        <p className='p-2 text-center'>23&deg;</p>
                        <p className='p-2 text-center text-text-faded' id="forecase-day-min">16&deg;</p>
                    </div>

                </div>
            </div>

        </section>

    );
}

export default App;
