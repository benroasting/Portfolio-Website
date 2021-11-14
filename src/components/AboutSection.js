import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import BenInfo from './BenInfo'
import Button from './Button'
import Ben from '../assets/images/Ben.jpeg'

const AboutStyle = styled.div`
    padding: 15rem 0;
    .about{
        display: flex;
        align-items: center;
        justify-content: flex start;
    }
    .aboutSection_left{
        flex: 1;
        padding-right: 3rem;
        margin-left: 3rem;
    }
    .aboutSection_right {
        flex: 1;
        margin-right: 3rem;
    }
    .about_pic {
        border: 10px solid var(--white);
        max-width:500px;
        // filter: drop-shadow(15px 15px 10px var(--black));
        img {
            max-width: 500px;
        }
    }
    .section_title{
        text-align: left;
    }
    .para{
        margin-top: 1.5rem;
    }
    .section_buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
        margin-top: 1rem;
    }
    @media only screen and (max-width: 950px){
        .container{
            flex-direction: column;
            text-align: center;
        } 
        .aboutSection_left{
            display: block;
            padding-bottom: 3rem;
            .para{
                text-align: left;
            }
        }
        .aboutSection_right{
            display: block;
        }
        .about_pic{
            min-width: 300px;
        }
    }
`;

export default function AboutSection() {
    return (
        <AboutStyle>
                <div className="about" id="about">
                        <div className="aboutSection_left">
                            <SectionTitle
                                className="section_title"
                                heading="About Me"
                            />
                            <BenInfo>
                                I am a bridge-builder, connector, and communicator.
                                I am a servant leader who truly cares about people 
                                and fosters a culture of trust, honor, and love.
                                Learning and working to become proficient in JavaScript,
                                React, Angular, SQL/noSQL, and NodeJs. I Will continue to 
                                keep learning new languages and frameworks. 
                            </BenInfo>
                            <div className="section_buttons">
                                <Button btnText="Connect" btnLink="contact" outline/>
                            </div>
                        </div>
                        <div className="aboutSection_right">
                            <div className="about_pic">
                                <img src={Ben} alt=""/>
                            </div>
                        </div>
                </div>
        </AboutStyle>

    )
}
