import { useState, useRef } from 'react';

function WeatherDisplay() {

    const location = useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <form onSubmit={() => {}}>
                <input type='text' ref={location}/>
                <button type='submit'/>
            </form>
        </div>
    );
}

export default WeatherDisplay;