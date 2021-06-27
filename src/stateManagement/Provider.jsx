import { createContext, useState } from 'react';

export const Provider = ({ children }) => {
    const [display, setDisplay] = useState('');
    const [bank, setBank] = useState(true);
    const [power, setPower] = useState(true);
    const [vol, setVol] = useState('.4');

    const values = {
        display: display,
        setDisplay: setDisplay,
        bank: bank,
        setBank: setBank,
        power: power,
        setPower: setPower,
        vol: vol,
        setVol: setVol,
    };
    return (
        <Context.Provider value={{ ...values }}>{children}</Context.Provider>
    );
};

export const Context = createContext();
