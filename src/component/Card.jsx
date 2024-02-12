// components/Card.js
import React from "react";


const Card = ({ title, description, imgSrc }) => {
    return (
        // mx-auto will center the card in its container, you can adjust max-w-md to change the card size
        <div className="mx-auto w-64 max-w-sm rounded-lg  bg-white p-6 shadow-2xl">
            <div className="flex justify-center">
                <img src={imgSrc} alt={title} width={90} height={80} />
            </div>
            <h3 className="mb-2 mt-4 text-center text-lg font-semibold">{title}</h3>
            <p className="text-center text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default Card;
