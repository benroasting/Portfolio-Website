import React from 'react'
import styled from 'styled-components';
// import BenInfo from './BenInfo'
import FooterCol from './FooterCol'
// import { Link } from 'react-scroll';

const FooterStyle = styled.div`
    padding-top: 5rem;
    
    background-color: var(--pink);
    height: 780px;
    .contact{
        display: flex;
        gap: 3rem;
        .footer_col1{
            margin-left: 10rem;
            margin-top: 2rem;
            margin-bottom: -1rem;
            flex: 1;
            color: var(--dark-bg);
        } 
        .footer_col1 .para {
            max-width: 80%;
            color: var(--dark-bg);
        }
        .footer_col3{
            flex: 1;
            margin-bottom: -2rem;
            .heading{
                margin-bottom: 0.5rem;
            }
        } 
        .footer_col4{
            flex: 1;
            .heading{
                margin-bottom: 0.5rem;
            }
        }
        .footer_col1_title{
            font-size: 2rem;
            margin-bottom: .5rem;
            color: var(--dark-bg);
        } 
        .footer_text{
            color: var(--dark-bg);
            font-size: 1.2rem;
        } 
    }
    
    @media only screen and (max-width: 768px) {
        .contact {
            margin-left:2rem;
            flex-direction: column;
            gap: 0rem;
            & > div {
            margin-top: 1rem;
            }
            .footer_col1 {
                margin-left:0rem;
                .para {
                    max-width: 100%;
                }
            }
        }

    `;

    


export default function Footer() {
    return (
        <FooterStyle>
        <div className="contact" id="contact">
            <div className="footer_col1">
                <h1 className="footer_col1_title">Ben Young</h1>
                <p className="footer_text">
                    A web designer and developer from Austin, TX.
                </p>
            </div>
            {/* <div className="footer_col2">
                <FooterCol
                heading="Navigation"
                links={[
                    {
                        title: 'Home',
                        path: '/',
                        type: 'Link',
                    },
                    {
                        type: 'Link',
                        title: 'About',
                        path: '/about',
                    },
                    {
                        type: 'Link',
                        title: 'Projects',
                        path: '/projects',
                    },
                    {
                        type: 'Link',
                        title: 'Contact',
                        path: '/contact',
                    },
                ]}
                />
            </div> */}
            <div className="footer_col3">
                <FooterCol
                heading="Contact Info"
                links={[
                    {
                        title: '+5015485087',
                        path: 'tel:+5015485087',
                    },
                    {
                        title: 'developing.ben@gmail.com',
                        path: 'mailto:developing.ben@gmail.com',
                    },
                    {
                        title: 'Austin, TX',
                        path: 'http://google.com/maps',
                    },
                ]}
                />
            </div>
            <div className="footer_col4">
                <FooterCol
                heading="More Info?"
                links={[
                    {
                        title: 'LinkedIn',
                        path: 'https://www.linkedin.com/in/benjamin-young-developing/',
                    },
                    {
                        title: 'GitHub',
                        path: 'https://github.com/benroasting',
                    },
                ]}
                />
            </div>
        </div>
        </FooterStyle>
    );
}
