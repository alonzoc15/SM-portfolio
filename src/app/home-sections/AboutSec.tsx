import React from 'react';
import Title from '@/components/Title';
import Divider from '@/components/Divider';
import SocialIcons from '@/components/SocialIcons';
import Image from "next/image"
import Link from "next/link"
// import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime';

const AboutSec = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title subtitle="About" title="I am Alonzo" link="Know More"/>
                {/* Divider */}
                <Divider />
                {/* Wrapper */}
                <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
                    {/* banner */}
                    <figure>
                        <Image
                            src="/images/about-page-picture.jpeg"
                            alt="banner" 
                            width={783} 
                            height={710} 
                        />
                    </figure>
                    {/* content */}
                    <div className="border border-neutral-900 p-6 rounded-2xl mt-5">
                        {/* wrapper */}
                        <div>
                            <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                                <Image 
                                    src={"/images/shape-2.svg"}
                                    alt="shape"
                                    width={30}
                                    height={30}
                                />
                                Introduction
                            </h3>
                            <p>
                                My journey as an automotive photographer has been a lifelong quest to 
                                capture the extraordinary in the ordinary, to freeze fleeting 
                                moments in time, and to share the world's beauty as I see it. 
                                Based in the city of Tampa, Florida I find 
                                inspiration in every corner of this diverse and vibrant country. 
                                Join me as we embark on a visual odyssey, where each photograph 
                                tells a story, and every frame is a piece of my heart.
                            </p>
                        </div>
                        {/* wrapper */}
                        <div className="grid gap-5 mt-6">
                            <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                                <Image 
                                    src={"/images/shape-2.svg"}
                                    alt="shape"
                                    width={30}
                                    height={30}
                                />
                                Contact Information
                            </h3>
                            {/* links wrapper */}
                            <div className="flex gap-3 flex-col lg:flex-row lg:gap-10">
                                {/*  email address */ }
                                <div>
                                    <p>Email</p>
                                    <a 
                                        href="mailto: Stiylconsulting11@gmail.com" 
                                        className=""
                                    >
                                            Stiylconsulting11@gmail.com
                                    </a>
                                </div>
                                {/* phone num */}
                                <div>
                                    <p>Phone Number</p>
                                    <a href="tel:+5165121996" className="">
                                        5165121996
                                    </a>
                                </div>
                            </div>

                            {/* buttons wrapper */}
                            <div className="flex gap-3 justify-between lg:items-center lg:flex-row flex-col flex-wrap">
                                {/* Social Icons */}
                                <SocialIcons />
                                <div className="flex gap-4 flex-wrap">
                                    <Link href="#" className="primary-btn w-full text-center">
                                        Let's Work
                                    </Link>
                                    <Link href="#" className="primary-btn w-full text-center">
                                        Download CV
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec