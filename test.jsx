import React, {useState, useEffect} from 'react';

const Test = () => {
    const [name, setName] = useState("");
    useEffect(() => {
        setName('jgy');
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Test;