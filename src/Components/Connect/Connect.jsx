import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  ${'' /* clip-path: polygon(0 12%, 100% 0, 100% 88%, 0 100%); */}
  text-align: center;
  background: linear-gradient(135deg, #02aab0, #00cdac);
  min-height: 100vh;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  white-space: nowrap;
`;

const Div = styled.div`
    margin-top: 4rem;
`;

const TiltedDiv = styled.div`
  margin: 1rem;
  ${'' /* transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
  -moz-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  -o-transform: rotate(-5deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3); */}
  `;

const Break = styled.div`
    min-height: 4em;;
`;

const SocialIconSpan = styled.a`
  cursor: pointer;
  font-size: 4em;
  color: inherit;
  margin: 1rem;
  text-decoration: none;
`;

const Heading = styled.h1`
    font-size:3.5rem;
`;

const Para = styled.p`
    font-size:2rem;
`;

export default Connect = () => {
    return (
        <Wrapper>
            <Break />
            <TiltedDiv>
                <Heading>Let's Connect...</Heading>
                <Block>
                    <Div>
                        <Para>Lets meet for a secret discussion. <br />My Current Location : </Para>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6050543299866!2d85.77591911547249!3d20.275207986411463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f7470b0751%3A0x935f1c8820fad9fd!2sRHR%20Boys&#39;%20Hostel%20CET%20Campus!5e0!3m2!1sen!2sin!4v1617022558906!5m2!1sen!2sin"
                            style={{ border: 0, margin: "2rem", height: "400px", width: "600px" }}
                            loading="lazy"
                        ></iframe>
                    </Div>
                    <Div>
                        <Para>You can find me on these social handles :</Para>
                        <SocialIconSpan
                            href="https://www.github.com/subham-mishra"
                            target="_blank"
                        >
                            <i className="grow fab fa-github-square"></i>
                        </SocialIconSpan>
                        <SocialIconSpan
                            href="https://www.linkedin.com/in/subham-mishra"
                            target="_blank"
                        >
                            <i className="grow fab fa-linkedin"></i>
                        </SocialIconSpan>
                        <SocialIconSpan
                            href="https://www.instagram.com/subh_mishr"
                            target="_blank"
                        >
                            <i className="grow fab fa-instagram"></i>
                        </SocialIconSpan>
                        <SocialIconSpan
                            href="https://www.facebook.com/m.subh.mishra"
                            target="_blank"
                        >
                            <i className="grow fab fa-facebook-square"></i>
                        </SocialIconSpan>
                    </Div>
                </Block>
            </TiltedDiv>
            <Break />
        </Wrapper>
    )
};