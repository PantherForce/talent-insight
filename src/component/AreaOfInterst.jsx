import React from "react";
import backgroundImage from "../assets/img/area.png";
import ContentContainer from "./ContentContainer";

const AreaOfInterest = () => {
    return (

        <div id="expertise" style={{
            backgroundImage: `url(${backgroundImage})`, // Replace with your actual image path
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
        >
            <ContentContainer>
                <div className="text-center text-white">
                    <h2 className="text-2xl md:text-5xl font-semibold">Areas of expertise</h2>
                </div>
                <ContentContainer>
                    <p className="text-md text-left md:text-center md:text-xl text-white">
                        We deliver thoroughly crafted solutions, ensuring your HR technology
                        and talent analytics align seamlessly with your business goals. Some
                        of our key areas of expertise include -
                    </p>
                </ContentContainer>
            </ContentContainer>
        </div>
    );
};

export default AreaOfInterest;
