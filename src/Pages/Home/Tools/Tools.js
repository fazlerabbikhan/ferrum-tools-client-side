import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://ferrum-tools-server-side.fly.dev/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    return (
        <div className='mt-20'>
            <h1 className='text-4xl my-10 text-primary font-bold text-center'>Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;