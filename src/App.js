import React from "react";
import styled from 'styled-components';
import Header from './Components/Header/Header';
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Education/Education"
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from './Components/Contact/Contact';
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

import AddBoxIcon from '@material-ui/icons/AddBox';
import CancelIcon from '@material-ui/icons/Cancel';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import scrollToComponent from 'react-scroll-to-component';

import './Styles/styles.scss';

const FABWrapper = styled.div`
  position:fixed;
  bottom:0;
  right:0;
  z-index:999999;
`;

const DIV = styled.div``;

export default class App extends React.Component {

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
  }

  render() {
    return (<>
      <FABWrapper>
        <Fab
          mainButtonStyles={{ color: "white", backgroundColor: "#e74c3c" }}
          icon={<AddBoxIcon />}
          alwaysShowTitle={true}
        >
          <Action
            text="Contact Me"
            onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 1500 })}
          >
            <i className="grow fas fa-envelope-open-text"></i>
          </Action>
          <Action
            text="Education"
            onClick={() => scrollToComponent(this.Education, { offset: 0, align: 'top', duration: 1500 })}
          >
            <i className="grow fas fa-graduation-cap"></i>
          </Action>

          <Action
            text="Skills"
            onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 1500 })}
          >
            <i className="grow fas fa-dumbbell"></i>
          </Action>
          <Action
            text="Projects"
            onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500 })}
          >
            <i className="grow fas fa-project-diagram"></i>
          </Action>
          <Action
            text="Connect"
            onClick={() => scrollToComponent(this.Connect, { offset: 0, align: 'top', duration: 1500 })}
          >
            <i className="grow fas fa-people-arrows"></i>
          </Action>
          <Action
            text="About Me"
            onClick={() => scrollToComponent(this.Header, { offset: 0, align: 'top', duration: 1500 })}
          >
            <i className="grow far fa-address-card"></i>
          </Action>
        </Fab>
      </FABWrapper>
      <DIV ref={(DIV) => { this.Header = DIV; }}><Header /></DIV>
      {/* <DIV ref={(div) => { this.AboutMe = div; }}><AboutMe /> </DIV>*/}
      <DIV ref={(DIV) => { this.Connect = DIV; }}><Connect /></DIV>
      <DIV ref={(DIV) => { this.Projects = DIV; }}><Projects /></DIV>
      <DIV ref={(DIV) => { this.Skills = DIV; }}><Skills /></DIV>
      <DIV ref={(DIV) => { this.Education = DIV; }}><Education /></DIV>
      <DIV ref={(DIV) => { this.Contact = DIV; }}><Contact /></DIV>
      <DIV ref={(DIV) => { this.Footer = DIV; }}><Footer /></DIV>
    </>
    )
  }
}

{/* 
  Live Chat Support
  Move to Top
  Resume {Download link}
  Projects Cards (Glass Moving)
  Experiences {Timeline}
  SVGS */}