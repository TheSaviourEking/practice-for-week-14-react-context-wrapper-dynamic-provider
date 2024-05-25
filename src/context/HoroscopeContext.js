import { createContext, useState } from 'react';

import horoscopes from '../data/horoscopes';

export const HoroscopeContext = createContext();

const HoroscopeProvider = (props) => {
    const [currentSign, setCurrentSign] = useState("Cancer");
    const sign = horoscopes[currentSign];

    return (
        <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
            {props.children}
        </HoroscopeContext.Provider>
    )
};

export { HoroscopeProvider };
