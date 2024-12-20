import { useState, useEffect } from 'react';
import NumberFlow from '@number-flow/react';

import demoTime from '../../demo-time.json';
import Redirect from './Redirect';

const DemoTimer = () => {
    const startTime = demoTime.starttime;
    const [remainingTime, setRemainingTime] = useState(300 - Math.floor((Date.now() / 1000) - startTime));

    useEffect(() => {
        const timer = setInterval(() => {
            const newRemainingTime = 300 - Math.floor((Date.now() / 1000) - startTime);
            setRemainingTime(newRemainingTime);
        }, 1000);
        console.log("useEffect")

        return () => clearInterval(timer);
    }, [startTime]);

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
