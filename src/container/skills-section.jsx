import React from 'react';
import Title from "../components/title"
import SubTitle from "../components/sub-title"
import Text from '../components/text';
import skills from '../js/languages';

const SkillsSection = (props) => {
    return (
        <section className="section" id={props.id}>
            <Title text="My Skills" className="title"></Title>
            <Text className="parrafo" text="I like to craft aesthetic user experience using modern frontend architecture."></Text>
            {skills.map((skill) => (
                <>
                    <SubTitle id={skill.id} className="subtitle" text={skill.name}></SubTitle>
                        <div className='row'>
                            {skill.languages.map((language) => (
                                <img id={language.id} src={language.img} alt={language.alt} width="64px"></img>
                            ))}
                        </div>
                </>
            ))}
        </section>
    );
}

export default SkillsSection;
