import React from 'react';
import Title from '@/components/Title';
import Divider from '@/components/Divider';
import Image from "next/image"
import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime';

const AboutSec = () => {
    return (
        <section>
            <div className="container">
                {/* Title */}
                <Title subtitle="About" title="I am Alonzo" link="Know More"/>
                {/* Divider */}
                <Divider />
                {/* Wrapper */}
                <div className="">
                    {/* banner */}
                    <figure>
                            <Image
                            src="/images/IMG_0434.jpeg"
                            alt="banner" 
                            width={783} 
                            height={710} 
                        />
                    </figure>
                    {/* content */}
                    <div className=""></div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec