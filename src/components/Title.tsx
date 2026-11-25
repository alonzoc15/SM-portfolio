import React from 'react'
import Link from "next/link"
import { RiArrowRightLongLine } from '@remixicon/react';

interface TitleProps {
    subtitle: string;
    title: string;
    link: string;
}

const Title = ({subtitle, title, link}: TitleProps) => {
    return (
        <div className="flex items-center justify-between flex-wrap gap-7">
            <div>
                <p className="subtitle">{subtitle}</p>
                <h2>{title}</h2>
            </div>

            <button>
                <Link href="" className="primary-btn flex item-center gap-2">
                    {link}
                    <span>
                        <RiArrowRightLongLine size={20} />
                    </span>
                </Link>
            </button>
        </div>
        
    )
}

export default Title