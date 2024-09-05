import React from "react";
import Project from "./Project";
import SectionWrapper from "../SectionWrapper";

const ProjectsSection = () => {
  const image1 =
    "https://firebasestorage.googleapis.com/v0/b/filefolio-d4e7b.appspot.com/o/suxf2r%2Fimages%2Fddddd.png?alt=media&token=75b18f57-91d7-4924-948b-e7673b74b550";
  const image2 =
    "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const image3 =
    "https://cdn.dribbble.com/userupload/4284353/file/original-ed72b8adb00fa5bdec36e2f061aed5a8.jpg?resize=400x300&vertical=center";
  const image4 =
    "https://www.jacobparis.com/images/design-a-login-flow-ui_2021-06-18-16-51-03.png";
  return (
    <SectionWrapper>
      <h2 className="Analogist w-full py-16 text-8xl">PROJECTS</h2>
      <Project
        key={"project1"}
        image1={image1}
        image2={image2}
        image3={image3}
        title=" Kit Store - Full Stack E-commerce Website"
        description=" This project showcases a comprehensive e-commerce platform built
            with the MERN stack. The website includes features like user
            authentication, product management, and an integrated payment
            system."
      />
      <Project
        key={"project2"}
        image1={image1}
        image2={image2}
        image3={image3}
        title=" Kit Store - Full Stack E-commerce Website"
        description=" This project showcases a comprehensive e-commerce platform built
            with the MERN stack. The website includes features like user
            authentication, product management, and an integrated payment
            system."
      />
      <Project
        key={"project3"}
        image1={image1}
        image2={image2}
        image3={image3}
        title=" Kit Store - Full Stack E-commerce Website"
        description=" This project showcases a comprehensive e-commerce platform built
            with the MERN stack. The website includes features like user
            authentication, product management, and an integrated payment
            system."
      />
    </SectionWrapper>
  );
};

export default ProjectsSection;
