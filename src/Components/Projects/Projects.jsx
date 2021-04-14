import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`
    padding-top:2rem;
`;

const Heading = styled.h1`
    text-align: center;
`;

const ProjectsDiv = styled.div`
  z-index: 0;
  width: 100%;
  padding: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Projects = () => (
    <Wrapper>
        <Heading>My Projects</Heading>
        <ProjectsDiv>
            <Card
                title="HANDWRITING RECOGNITION"
                desc="Recognising Hindi characters using Convolutional Neural Network (CNN) and OpenCV. "
                link="https://github.com/Subham-Mishra/Hindi-Handwritten-Character-Recognition"
                stack={["PYTHON"]}
            />
            <Card
                title="EMOJINATOR"
                desc="Emojinator tries to predict the Emoji from the hand gesture shown in front of webcam."
                link="https://github.com/Subham-Mishra/Emojinator-Gesture-Recognition"
                stack={["PYTHON"]}
            />
            <Card
                title="Chat_IO-Sockets.io"
                desc="A real time chatting application made using Sockets.io and nodejs."
                link="https://github.com/Subham-Mishra/Chat_IO-Sockets.io"
                stack={["NODEJS"]}
            />
            <Card
                title="Github-info-Extractor"
                desc="App using Github API to extract details of the profile and Repositories of any user. "
                link="https://github.com/Subham-Mishra/Github-info-Extractor"
                stack={["ANGULAR"]}
            />
            <Card
                title="Weather-App"
                desc="A SPA to display Current Temperature,Humidity and wind speed of a city."
                link="https://github.com/Subham-Mishra/Weather-App"
                stack={["ANGULAR"]}
            />
            <Card
                title="Speak_It"
                desc="Chrome Extension that Speaks out the text that has been selected on the webpage. "
                link="https://github.com/Subham-Mishra/Speak_It"
                stack={["PYTHON"]}
            />

        </ProjectsDiv>
    </Wrapper>
);