import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import Particles from "./Particles";
import { name, aboutMe } from '../../UserData/info.js';
import '../../Styles/headerButtonAnimation.scss';
import Resume from 'url:../../../public/Subham_Mishra_2021_CSE_CET_Resume.pdf'
const Wrapper = styled.div`
    height: 100vh;
    postion:relative;
`;

const Container = styled.div`
    position: absolute;
    top: 35%;
    left: 5rem;
`;

const HeadDiv = styled.div`
    min-height: 35vh;

`;
const Heading = styled.h1`
    font-size: 3rem;
`;

const Span = styled.span`
    background: -webkit-linear-gradient(135deg,#02aab0,#00cdac);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Br = styled.br``;

const Button = styled.a`
    text-decoration: none;
    color:black;
`;


export default Header = () => {
    return (
        <Wrapper>
            <Particles />
            <Container>
                <HeadDiv>
                    <Heading> Hi, My name is <Span>{name}.</Span>
                        <Br />
                        <Typed
                            strings={aboutMe}
                            typeSpeed={30}
                            loop
                        />
                    </Heading>
                </HeadDiv>
                <Br />
                <Button
                    className='buttonfx slideleft'
                    // onClick={() => { console.log('Clicked') }}>
                    href={Resume}   target="_blank" download>
                    Know more about me!
                </Button>
            </Container>
        </Wrapper>
    )
};
