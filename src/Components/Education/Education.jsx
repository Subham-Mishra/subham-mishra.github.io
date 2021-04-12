import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import StarsIcon from '@material-ui/icons/Stars';

const Wrapper = styled.div`
    background-color:#2a7886;
    padding: 5rem 5rem;;
`;

const Heading = styled.h1`
    text-align: center;
    color: white;
    margin-bottom:5rem;
`;

export default Education = () => (
    <Wrapper>
        <Heading>My Educational Background</Heading>
        <VerticalTimeline >
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#e8687b', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #e8687b' }}
                date="2017-2021"
                iconStyle={{ background: '#01a9b4', color: '#fff' }}
                icon={<SchoolIcon />}>
                <h3 className="vertical-timeline-element-title">College of Engineering & Technology, Bhubaneswar</h3>
                <h4 className="vertical-timeline-element-subtitle">BTech in Computer Science & Engineering  </h4>
                <p>CGPA: - 8.62 (Till 7th Semester)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#e8687b', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #e8687b' }}
                date="2015-2017"
                iconStyle={{ background: '#d9455f', color: '#fff' }}
                icon={<SchoolIcon />}>
                <h3 className="vertical-timeline-element-title">DAV Public School, Chandrasekharpur, Bhubaneswar</h3>
                <h4 className="vertical-timeline-element-subtitle">12th from CBSE Board </h4>
                <p>Percentage: - 91.8%</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#e8687b', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #e8687b' }}
                date="2015"
                iconStyle={{ background: '#01a9b4', color: '#fff' }}
                icon={<SchoolIcon />}>
                <h3 className="vertical-timeline-element-title">St. Mary's School, Jajpur Road</h3>
                <h4 className="vertical-timeline-element-subtitle">Matriculation from ICSE Board </h4>
                <p>Percentage: - 96.8%</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                iconStyle={{ background: '#d9455f', color: '#fff' }}
                icon={<StarsIcon />}
            />
        </VerticalTimeline>
    </Wrapper>
);