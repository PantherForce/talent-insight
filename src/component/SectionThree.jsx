import React from 'react'
import ContentContainer from './ContentContainer'

const SectionThree = () => {
    return (

        <ContentContainer>
            <div>
                <center className="text-2xl font-bold  md:text-5xl">
                    <h2 style={{ color: "rgba(57, 113, 181, 0.794)" }}>
                        Strategic HR Tech solutions <br /> for your success
                    </h2>
                </center>
                <ContentContainer>
                    <center className="text-md text-left md:text-center md:text-xl">
                        <p>
                            Guiding businesses to success, we specialize in strategic HR Tech
                            solutions, leveraging our expertise as a trusted implementation
                            partner. Our proven track record includes empowering firms through
                            seamless HR tech integration for enhanced efficiency and
                            sustainable growth.
                        </p>
                    </center>
                </ContentContainer>
            </div>
        </ContentContainer>

    )
}

export default SectionThree