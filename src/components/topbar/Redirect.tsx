import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const subdomain = 'lovetokens.danilocangucu.net';
        const targetUrl = `https://danilocangucu.net/status?subdomain=${subdomain}`;

        window.location.href = targetUrl;
    }, [navigate]);

    return <>Redirecting...</>;
};

export default Redirect;
