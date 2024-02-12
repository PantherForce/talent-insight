import React from 'react'
import handshake from "../assets/img/Business merger-bro 1.png"
import ContentContainer from './ContentContainer'

const AboutUs = () => {
    return (
        <ContentContainer>
            <div id='about' className="flex flex-col items-center justify-center p-4 md:flex-row">
                <div className="md:w-1/2">
                    <h2
                        style={{ color: "rgba(52, 92, 167, 0.7458)" }}
                        className="text-#4BC9F1 mb-4 text-2xl font-bold md:text-4xl"
                    >
                        About us
                    </h2>
                    <p className="">
                        Talent Insights is your dedicated partner in navigating the dynamic
                        landscape of HR technology and talent analytics. With a focus on
                        human capital growth, we have been instrumental in helping firms
                        seamlessly implement HR tech solutions and harness the power of
                        talent analytics.
                    </p>
                </div>
                <div className="mt-4 md:mt-0 md:w-1/2">
                    <img src={handshake} alt="" />
                </div>
            </div>
        </ContentContainer>
    )
}

export default AboutUs