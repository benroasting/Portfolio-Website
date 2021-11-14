import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const ColStyles = styled.div`
.heading{
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: var(--dark-bg);
}
li{
    margin-bottom: 1rem;
    color: var(--dark-bg);
}
a{
    font-size: 1.25rem;
    color: var(--dark-bg);
}
`;

export default function FooterCol({ 
    heading = 'Col Heading',
    links = [
        {
            type: 'Link',
            title: 'Home',
            path: '/home',
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
        }
    ]
 }) {
    return (
        <ColStyles>
        <div>
            <h2 className="heading">{heading}</h2>
            <ul> 
                {links.map((item, index) => (
                    <li key={index}>
                        {item.type === 'Link' ? (
                        <Link to={item.path}>{item.title}</Link>
                    ) : (<a href={item.path} target="_blank" rel="noreferrer">
                        {item.title}
                        </a>
                    )}
                    </li>
                ))}
            </ul>
        </div>
        </ColStyles>
    )
}

