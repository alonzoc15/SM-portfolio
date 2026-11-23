import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'
import MarqueeSec from '@/components/MarqueeSec'

const HeroSec = () => {
    return (
        <section>
            <div>
                {/* content */}
                <div className="container">
                        {/* Title */}
                            <div className="">
                                <p className="subtitle">Stunning Photography by</p>
                                <h1 className="">Alonzo Camille</h1>
                            </div>
                        {/* shape */}
                        <div className="">
                            <Image 
                                src="/images/shape-1.svg" 
                                alt="shape" 
                                width={346} 
                                height={346}
                            />
                        </div>
                        {/* Title 2 */}
                        <div>
                            <Button label="Let's"/>
                            <h2>Work Together</h2>
                        </div>
                </div>
                {/* marquee */}
                <MarqueeSec />
                {/* banner */}
                <figure className="containter">
                    <Image 
                        src="/images/hero-banner.png"
                        alt="hero banner"
                        width={1280}
                        height={424}
                        priority
                        className="w-full h-full object-cover"
                    />
                </figure>
            </div>
        </section>
    )
}

export default HeroSec;