import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { RiArrowRightUpLongLine } from '@remixicon/react'

interface cardProps {
    img: string,
    title: string,
    date: string
}

const PortfolioCard = ({img, title, date}:cardProps) => {
    return (
        <div>
            {/* Card image */}
            <figure className="mb-5">
                <Image 
                    src={img} 
                    alt={title} 
                    width={519} 
                    height={499} 
                    className="rounded-4xl w-full h-full object-cover"
                />
            </figure>
            {/* Card content */}
            <div className="flex justify-between items-center flex-wrap gap-5">
                <div>
                    <h4 className="text-xl">{title}</h4>
                    <p>{date}</p>
                </div>
                <Link 
                    href='/portfolio' 
                    className="flex items-center gap-2 uppercase hover:underline"
                >
                View Project
                <span>
                    <RiArrowRightUpLongLine />
                </span>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioCard