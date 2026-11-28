import React from "react";
import Title from "./Title";
import Divider from "./Divider";
import { faqItems } from "@/data/data";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "@remixicon/react";

const FaqSec = () => {
    return (
        <div className="container">
            {/* Title */}
            <Title subtitle="FAQ's" title="Frequently Asked Questions"/>
            {/* Divider */}
            <Divider />
            {/* wrapper */}
            <div className="">
                {faqItems.map((item) => (
                    <div className="" key={item.id}>
                        {/* Title */}
                        <div className="">
                            <h3 className="">{item.title}</h3>
                            <button className="">
                                <RiArrowDropDownLine size={30} />
                                <RiArrowDropUpLine size={30} />
                            </button>
                        </div>
                        {/* Text */}
                        <div className="">
                            <p className="">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FaqSec