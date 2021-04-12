import React from 'react';
import styled from 'styled-components';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";


const Heading = styled.h1`
    text-align: center;
`;

const SkillsDiv = styled.div`
    padding: 5rem;
    margin-left:1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Div = styled.div`
    position:relative;
    display: "flex";
    margin: 3rem;
`;

const ProgressBarsContainer = (props) => {
    return (
        <Div>
            <div style={{ position:"absolute",left:"-5rem",width: "10%" }}>
                <h3 className="h5">{props.label}</h3>
                <p>{props.description}</p>
            </div>
            <div style={{ width:200,height:200  }}>{props.children}</div>
        </Div>
    );
}

export default Skills = () => (
    <>
        <Heading>Technical Skills</Heading>
        <SkillsDiv>
            <ProgressBarsContainer label="Javascript">
                <ChangingProgressProvider values={[0, 75]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"75%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="ReactJS">
                <ChangingProgressProvider values={[0, 80]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"80%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="Python">
                <ChangingProgressProvider values={[0, 80]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"80%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="Django">
                <ChangingProgressProvider values={[0, 70]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"70%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="NodeJS">
                <ChangingProgressProvider values={[0, 65]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"65%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="DSA">
                <ChangingProgressProvider values={[0, 75]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"75%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="Git">
                <ChangingProgressProvider values={[0, 90]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"90%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="Data Analysis">
                <ChangingProgressProvider values={[0, 60]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"60%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="Visualisation">
                <ChangingProgressProvider values={[0, 70]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"70%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="Docker">
                <ChangingProgressProvider values={[0, 60]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"60%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="CI/CD">
                <ChangingProgressProvider values={[0, 60]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"60%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="GraphQL">
                <ChangingProgressProvider values={[0, 80]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"80%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="MaterialUI">
                <ChangingProgressProvider values={[0, 80]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"80%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="Bootstrap">
                <ChangingProgressProvider values={[0, 90]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"90%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
            <ProgressBarsContainer label="Machine Learning">
                <ChangingProgressProvider values={[0, 50]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            text={"50%"}
                            circleRatio={0.75}
                            styles={buildStyles({
                                textColor: "red",
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                pathColor: "turquoise",
                                trailColor: "gold"
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </ProgressBarsContainer>
        </SkillsDiv>
    </>
);