import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    function handleClick() {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => {
                setError(error);
            })
            .finally(() => { setLoading(false) })
    }

    useEffect(() => {
        handleClick(url);
    }, [url]);

        return { loading, error, data, handleClick };
    };
    export default useFetch;