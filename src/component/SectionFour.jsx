import React from 'react';
import Card from './Card';
import handshake from "../assets/img/handshake 1.png";
import image2 from "../assets/img/decision-making 1.png";
import image3 from "../assets/img/goal 1.png";
import vectorone from "../assets/img/Vector.png";

const SectionFour = () => {
    return (
        <div
            className="relative"
            style={{
                minHeight: "70vh"
            }}
        ><img className='absolute w-full h-full opacity-[0.2]' src={vectorone} />
            {/* Pseudo-element for background image with reduced opacity */}
            <div>



                <div className="container mx-auto  px-4 py-8">
                    <div className="flex flex-col space-y-4 md:-mx-4 md:flex-row md:space-y-0">
                        <Card
                            imgSrc={handshake}
                            title="Expertise in HR tech"
                            description="Benefit from our in-depth knowledge and experience in the HR tech space. We've successfully guided numerous firms through the ever-evolving landscape of technology solutions."
                        />
                        <Card
                            imgSrc={image2}
                            title="Strategic talent insights"
                            description="Gain a competitive edge with our Talent Insights service, designed to understand and address your HR requirements at every stage, ensuring a harmonious blend of technology and talent."
                        />
                        <Card
                            imgSrc={image3}
                            title="Meet your goals"
                            description="Connect with our experienced team and tap into the forefront of HR technology solutions. Together, let's address your unique challenges, ensuring a tailored and effective approach."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionFour;
