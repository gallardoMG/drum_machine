import { useContext } from 'react';
import { Context } from '../stateManagement/Provider';
import Volume from './Volume';

const Controls = () => {
    const { display, setDisplay, bank, setBank, power, setPower } =
        useContext(Context);

    const changeBank = () => {
        setBank(!bank);
        bank ? setDisplay('Heater Kit') : setDisplay('Smooth Piano Kit');
    };
    const turnOn = () => {
        setPower(!power);
        setDisplay('');
    };
    const stylePower = {
        float: power ? 'right' : 'left',
    };
    const styleBank = {
        float: bank ? 'left' : 'right',
    };
    return (
        <div className='wrapper-controls'>
            <div id='logo'>
                GAll <i className='fas fa-fire' />
            </div>
            <div className='button-select' onClick={() => turnOn()}>
                <div className='float' style={stylePower} />
            </div>
            <div id='display'>
                <label>{display}</label>
            </div>
            <Volume />
            <div
                className='button-select'
                onClick={e => (power ? changeBank() : e.preventDefault())}
            >
                <div className='float' style={styleBank} />
            </div>
        </div>
    );
};
export default Controls;
