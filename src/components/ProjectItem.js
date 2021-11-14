import React from 'react';
import styled from 'styled-components';
import Veggie_Tender from '../assets/images/Veggie_Tender.png';

const ProjectItemStyles = styled.div`
.projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
        height: 100%;
    }
}
.projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
}
.projectItem__title {
    font-size: 1.5rem;
}
.projectItem__desc {
    font-size: 1.1rem;
    font-family: 'AtkinsonHyperlegibleRegular';
    margin-top: 1rem;
}
@media only screen and (max-width: 768px) {
    .projectItem__img {
        height: 350px;
    }
}
`;

export default function ProjectItem({
    img = Veggie_Tender,
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
    return (
        <ProjectItemStyles>
            <div className="projectItem__img">
                <img src={img} alt="project_img" />
            </div>
            <div className="projectItem__info">
                <h3 className="projectItem__title">{title}</h3>
                <p className="projectItem__desc">{desc}</p>
            </div>
        </ProjectItemStyles>
    );
}