import React from 'react'
import styled from 'styled-components'; 
import { Link } from 'react-scroll'

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
    font-size: 1.5rem;
    background-color: ${(props) =>
    props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.5em 1em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
    }
    @media only screen and (max-width: 768px) {
        .button {
        font-size: 1.25rem;
        }
    }
`;

export default function Button({
    btnText = 'Button',
    btnLink = 'Button',
    outline = false,
}) {
    return (
    <ButtonStyle outline={outline} className="button-wrapper">
        <Link className="button" to={btnLink}>
            {btnText}
        </Link>
    </ButtonStyle>
    );
}