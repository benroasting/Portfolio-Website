import React from 'react'
import styled from 'styled-components';
import BenBW from '../assets/images/BWBen.JPG'
import BenInfo from "./BenInfo"
import Button from "./Button"

const BenSectionStyles = styled.div`
    .ben{
        height: 100vh;
        margin-left: 8rem;
        min-height: 1000px;
        width: 80%;
        display: 
        display: block;
        text-align: center;
        align-items: center;
        justify-content:center;
        position: relative;

    }
    .ben_heading{
        font-size: 2.5rem;
        margin-top: 10rem;
        margin-left: 4rem;
        position: relative;
        text-align: left;
        span{
            display: inline-block;
            width: 100%
        }
        .ben_name{
            font-size: 3rem;
            font-family: 'SignikaNegativeBold'
            font-color: var(--white);
            
        }
    }
    .ben_pic{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 10px solid var(--white);
        // filter: drop-shadow(15px 15px 10px var(--black));
    }
    .ben_info{
        max-width: 80%;
        margin-left: 6rem;
        margin-top: 2rem;
        text-align: left;
        display: flex;
    }
    .info{
        width: 50%;
        float: left;
    }
    .connect_button{
        width: 40%;
        margin-left: 4rem;
        float: right;
        position: relative;
    }

    @media only screen and (max-width: 768px) {
        .ben {
            display: block;
            margin-left: 3rem;
        }
        .ben__heading {
          font-size: 1.4rem;
          margin-bottom: -3rem;
          .ben__name {
            font-size: 4.5rem;
          }
        }
        .ben_pic {
            max-width: 75%;
            height: 300px;
            min-width: 400px;
        }
        .ben_info{
            margin-left: 4rem;
            margin-top: 2rem;
            display: flex;
        }
        
    // .ben_social{
    //     font-size: 2rem;
    //     gap: 2rem;
    //     position: absolute;
    //     bottom: 20px;
    //     width: 50px;     
    // }
    // .ben_social_items{
    //     ul{
    //         li{
    //             margin-bottom: 0.5rem;
    //             a{}
    //         }
    //     }
    // }

    `;

export default function BenSection() {


    return (
        <BenSectionStyles>
            <div className="ben">
                <h1 className="ben_heading">
                    <span className="ben_name">Hi! I'm Ben</span>
                </h1>
                <div className="ben_pic">
                    <img className="img" src={BenBW} alt=""/>
                </div>
                <div className="ben_info">
                    <BenInfo className="info">
                        A full stack developer who is passionate about helping
                        others through technology.  I want to always keep learning,
                        growing, and developing.
                    </BenInfo>
                    <Button className="connectButton" btnText="Projects" btnLink="projects"/>

                </div>
                {/* <div className="ben_social">
                    <div className="ben_follow">
                        <p>Follow: </p>
                    </div>
                    <div className="ben_social_items">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/benisyoung" target="_blank" rel="noreferrer">FB</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/benjamincharlesyoung/" target="_blank" rel="noreferrer">IG</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/benjamin-young-developing/" target="_blank" rel="noreferrer">LI</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>

        </BenSectionStyles>
    )
}
