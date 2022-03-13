import React from 'react';

const { useState, useEffect } = require("react");

function useQuery(url) {
    const [data, setData] = useState(null); //useState permettent de modifier l'état
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setData(json);
            })
            .catch((error) => {
            setError(error);
            })
            .finally(() => console.log("finally"))
        
    }, [url]);

    return { data, error, loading };
}
export default useQuery;