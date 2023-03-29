import React from 'react';
import MohaemoojiSection from '../../components/about/aboutMohaemookji';
import MissionSection from '../../components/about/missionSection';
import EndGoalSection from '../../components/about/EndGoalSection';
import ContactSecton from '../../components/about/contactSection';

const About = () => {
    return (
        <>
            <MohaemoojiSection/>
            <MissionSection/>
            <EndGoalSection/>
            <ContactSecton/>
        </>
    );
};

export default About;