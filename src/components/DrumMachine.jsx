import { createContext } from 'react';
import Controls from './Controls';
import Pad from './Pad';
import { Provider } from '../stateManagement/Provider';

export const Context = createContext();
export const DrumMachine = () => {
    return (
        <main id='drum-machine'>
            <Provider>
                <Pad />
                <Controls />
            </Provider>
        </main>
    );
};
