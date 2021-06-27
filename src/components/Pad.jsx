import { useContext } from 'react';
import { Context } from '../stateManagement/Provider';

const Pad = () => {
    const { setDisplay, bank, power, vol } = useContext(Context);
    const play = (e, button) => {
        const sound = document.getElementById(button);
        sound.play();
        sound.volume = vol;
        setDisplay(e.target.getAttribute('name'));
        const styles = document.querySelector(`.${button}`);
        styles.classList.add('selected');
        setTimeout(() => styles.classList.remove('selected'), 200);
    };
    return (
        <section className='pad-bank'>
            <div
                onClick={e => (power ? play(e, 'Q') : e.preventDefault())}
                className='drum-pad Q'
                name={bank ? 'Heater 1' : 'Chord 1'}
            >
                Q
                <audio
                    src={
                        power
                            ? bank
                                ? 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                                : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
                            : '#'
                    }
                    id='Q'
                    className='clip'
                />
            </div>
            <div
                onClick={e => (power ? play(e, 'W') : e.preventDefault())}
                className='drum-pad W'
                name={bank ? 'Heater 2' : 'Chord 2'}
            >
                W
                <audio
                    src={
                        power
                            ? bank
                                ? 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                                : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
                            : '#'
                    }
                    id='W'
                    className='clip'
                />
            </div>
            <div
                onClick={e => (power ? play(e, 'E') : e.preventDefault())}
                className='drum-pad E'
                name={bank ? 'Heater 3' : 'Chord 3'}
            >
                E
                <audio
                    src={
                        power
                            ? bank
                                ? 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                                : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
                            : '#'
                    }
                    id='E'
                    className='clip'
                />
            </div>
            <div
                onClick={e => (power ? play(e, 'A') : e.preventDefault())}
                className='drum-pad A'
                name={bank ? 'Heater 4' : 'Shaker'}
            >
                A
                <audio
                    src={
                        power
                            ? bank
                                ? 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                                : 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
                            : '#'
                    }
                    id='A'
                    className='clip'
                />
            </div>
            <div
                onClick={e => (power ? play(e, 'S') : e.preventDefault())}
                className='drum-pad S'
                name={bank ? 'Clap' : 'Open HH'}
            >
                S
                <audio
                    src={
                        power
                            ? bank
                                ? 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                                : 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
                            : '#'
                    }
                    id='S'
                    className='clip'
                />
            </div>
            <div
                onClick={e => (power ? play(e, 'D') : e.preventDefault())}
                className='drum-pad D'
                name={bank ? 'Open HH' : 'Chord 2'}
            >
                D
                <audio
                    src={
                        power
                            ? bank
                                ? 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                                : 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
                            : '#'
                    }
                    id='D'
                    className='clip'
                />
            </div>
            <div
                onClick={e => (power ? play(e, 'Z') : e.preventDefault())}
                className='drum-pad Z'
                name={bank ? "Kick n' Hat" : 'Punchy Kick'}
            >
                Z
                <audio
                    src={
                        power
                            ? bank
                                ? 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                                : 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
                            : '#'
                    }
                    id='Z'
                    className='clip'
                />
            </div>
            <div
                onClick={e => (power ? play(e, 'X') : e.preventDefault())}
                className='drum-pad X'
                name={bank ? 'Kick' : 'Side Stick'}
            >
                X
                <audio
                    src={
                        power
                            ? bank
                                ? 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                                : 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
                            : '#'
                    }
                    id='X'
                    className='clip'
                />
            </div>
            <div
                onClick={e => (power ? play(e, 'C') : e.preventDefault())}
                className='drum-pad C'
                name={bank ? 'Closed HH' : 'Snare'}
            >
                C
                <audio
                    src={
                        power
                            ? bank
                                ? 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                                : 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
                            : '#'
                    }
                    id='C'
                    className='clip'
                />
            </div>
        </section>
    );
};

export default Pad;
