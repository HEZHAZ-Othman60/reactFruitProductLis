import React from 'react';
import useQuery from './Components/UseQuery';

const Test = () => {
    const { data } = useQuery('https://v2.jokeapi.dev/joke/Any');

    console.log(data);
    return (
        <div>
            <span>{data?.setup}</span>
            <span>{data?.joke}</span>
        </div>
    );
};
export default Test;





