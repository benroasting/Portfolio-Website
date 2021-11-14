import React from 'react'
import styled from 'styled-components'; 

const BenInfoStyle = styled.div`
  margin: 0 auto;
  font-size: 1.25rem;
  line-height: 1.75em;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function BenInfo({ children }) {
    return (
        
        <BenInfoStyle className="para">
            <p>{children}</p>
        </BenInfoStyle>
    );
}
