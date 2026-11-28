import React from "react"
import Title from "@/components/Title"
import { portfolioSectionItems } from "@/data/data"
import PortfolioCard from "@/components/PortfolioCard"

const PortfolioSec = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title 
                    subtitle="Portfolio" 
                    title="Explore my photography work" 
                    link="View All Works" 
                />
                {/* Card wrapper */}
                <div className="grid gap-12 mt-20 md:grid-cols-2 lg:grid-cols-3">
                    {portfolioSectionItems.map(item => (
                        //card
                        <PortfolioCard 
                            key={item.id} 
                            img={item.imgUrl} 
                            title={item.title} 
                            date={item.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortfolioSec