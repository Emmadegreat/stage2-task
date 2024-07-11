'use client'

import React,{FC} from 'react'

const Loading: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style={{shapeRendering: 'auto', display: 'block', background: 'rgb(255, 255, 255)'}} xmlnsXlink="http://www.w3.org/1999/xlink"><g><path stroke="none" fill="#af0101" d="M29 50A21 21 0 0 0 71 50A21 22.8 0 0 1 29 50">
                <animateTransform values="0 50 50.9;360 50 50.9" keyTimes="0;1" repeatCount="indefinite" dur="1s" type="rotate" attributeName="transform"></animateTransform>
            </path><g></g></g>
            </svg>
        </div>
    );
};

export default Loading