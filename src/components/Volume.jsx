import { useContext } from 'react';
import { Context } from '../stateManagement/Provider';

const Volume = () => {
    const { setDisplay, power, vol, setVol } = useContext(Context);
    const changeVol = e => {
        setVol(e.target.value);
        setDisplay(`Volume ${Math.trunc(e.target.value * 100)}%`);
        setTimeout(() => setDisplay(''), 1000);
    };
    return (
        <div className='volume'>
            <input
                type='range'
                step='0.01'
                min='0'
                max='1'
                value={vol}
                onChange={e => (power ? changeVol(e) : e.preventDefault())}
            />
        </div>
    );
};
export default Volume;
