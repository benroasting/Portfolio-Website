import React from 'react'
import styled from 'styled-components'

const SectionTitleStyles = styled.div`
    text-align: center;
    h2{
        font-family: 'SignikaNegativeBold'
        font-size: 4rem;
        margin-top: .5rem;
    }
    @media only screen and (max-width: 768px){
        p{
            font-size: 1rem;
        }
        h2{
            font-size: 2rem;
        }
    }
`;


export default function SectionTitle({
    heading= ''
}) {
    return (
        <SectionTitleStyles className="section_title">
            <div>
                <h2 className="heading">{heading}</h2>
            </div>
        </SectionTitleStyles>
    )
}