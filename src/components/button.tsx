import React from 'react'
import { RiArrowRightUpLongLine } from '@remixicon/react';

interface buttonProps {
    label: string;
}

const Button = ({label}: buttonProps ) => {
    return (
        <button>
            <h2 className="">{label}</h2>
            <span className="">
                <RiArrowRightUpLongLine size={26}/>
            </span>
        </button>
    )
}

export default Button