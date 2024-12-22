import { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFlow from '@number-flow/react';

import Redirect from './Redirect';

const DemoTimer = () => {
    const [remainingTime, setRemainingTime] = useState<number | null>(null);
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        const fetchDemoTime = async () => {
            try {
                const { data } = await axios.get('https://lovetokens.danilocangucu.net/demotime.json');
                const fetchedStartTime = data.starttime;

                setStartTime(fetchedStartTime);
                const initialRemainingTime = 300 - Math.floor((Date.now() / 1000) - fetchedStartTime);
                setRemainingTime(initialRemainingTime);
            } catch (error) {
                console.error('Error fetching demoTime:', error);
            }
        };

        fetchDemoTime();
    }, []);

    useEffect(() => {
        if (startTime !== null) {
            const timer = setInterval(() => {
                const newRemainingTime = 300 - Math.floor((Date.now() / 1000) - startTime);
                setRemainingTime(newRemainingTime);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [startTime]);

    if (remainingTime === null) {
        return <p>Loading...</p>;
    }

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
        <>
            {remainingTime > 0 ? (<>
                Demo expires in{' '}
                {minutes > 0 ? <NumberFlow
                    value={minutes}
                    key={`minutes-${minutes}`}
                    suffix="m"
                /> : null}
                <NumberFlow
                    value={seconds}
                    key={`seconds-${seconds}`}
                    suffix="s"
                />
                {(minutes === 0 && seconds < 30) ? " – You will be redirected to the status page soon." : null}
            </>
            ) : (
                <Redirect />
            )}
        </>
    );
};

export default DemoTimer;
