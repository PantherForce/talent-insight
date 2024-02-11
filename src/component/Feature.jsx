
import React from "react";

const Feature = ({
    title,
    description,
    imgSrc,
    imgAlt,
    reverse,
}) => {
    return (
        <div
            className={`flex flex-col items-center md:flex-row ${reverse ? "md:flex-row-reverse" : ""
                } `}
        >
            <div className={`w-full md:w-1/2 ${reverse ? "md:pl-8" : "md:pr-8"}`}>
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    width={400}
                    height={200}

                />
            </div>
            <div className="w-full md:w-1/2">
                <h3
                    style={{ color: "rgba(108, 144, 196, 1)" }}
                    className="mb-2 text-2xl md:text-3xl font-bold"
                >
                    {title}
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Feature;
