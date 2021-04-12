import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const CardDiv = styled.div`
  margin: 30px 20px;
  width: 380px;
  height: 300px;
  position: relative;
  padding:2rem;
  border-radius: 20px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  transition: 0.4s;
  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
  }
`;

const Para = styled.p`
    opacity:0.6;
`;

const Anchor = styled.div`
    position:absolute;
    bottom:0;
    right:0;
    padding:1rem;
`;

export default Card = ({ title, desc, link, stack }) => (
    <>
        <CardDiv>
            <h2>{title}</h2>
            <br />
            <Para>{desc}</Para>
            <br />
            <div>
                {stack.map((eachStack, i) => (
                    <Chip color="primary" variant="outlined" size="small" avatar={<Avatar>{eachStack[0]}</Avatar>} label={eachStack}/>
                ))}
            </div>
            <Anchor><a href={link}>Check it out!</a></Anchor>
        </CardDiv>
    </>
);