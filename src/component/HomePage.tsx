import React from "react";
import Feature from "./Feature";
import ContentContainer from "./ContentContainer";
import image1 from "../assets/img/Online resume-pana 1.png";
import image2 from "../assets/img/Group 1171277069.png";
import image3 from "../assets/img/Group 1171277070.png";

const HomePage = () => {
  return (
    <ContentContainer>
      <div className="container mx-auto px-4">
        <Feature
          title="HR Tech implementation"
          description="Our team is deeply immersed in the HR tech world, providing end-to-end solutions for seamless implementation. We ensure that your organization leverages the latest advancements to streamline processes and enhance productivity."
          imgSrc={image1} // Replace with your actual image path
          imgAlt="HR Tech implementation"
        />

        <Feature
          title="Talent analytics"
          description="Unlock the potential of your workforce through our talent analytics expertise. Gain valuable insights into your talent pool, enabling strategic decision-making and informed HR strategies for organizational growth."
          imgSrc={image2} // Replace with your actual image path
          imgAlt="Talent analytics"
          reverse
        />

        <Feature
          title="HR Tech implementation"
          description="Our team is deeply immersed in the HR tech world, providing end-to-end solutions for seamless implementation. We ensure that your organization leverages the latest advancements to streamline processes and enhance productivity."
          imgSrc={image3} // Replace with your actual image path
          imgAlt="HR Tech implementation"
        />

        {/* Add more features as needed */}
      </div>
    </ContentContainer>
  );
};

export default HomePage;
