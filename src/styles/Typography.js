import { createGlobalStyle } from 'styled-components';
import AtkinsonHyperlegibleRegular from '../assets/fonts/AtkinsonHyperlegibleRegular.ttf';
import SignikaNegativeLight from '../assets/fonts/SignikaNegativeLight.ttf';
import SignikaNegativeBold from '../assets/fonts/SignikaNegativeBold.ttf';

const Typography = createGlobalStyle`
@font-face {
    font-family: 'AtkinsonHyperlegibleRegular';
    src: url(${AtkinsonHyperlegibleRegular});
    font-style: normal;
}
@font-face {
    font-family: 'SignikaNegativeLight';
    src: url(${SignikaNegativeLight});
    font-style: normal;
}
@font-face {
    font-family: 'SignikaNegativeBold';
    src: url(${SignikaNegativeBold});
    font-style: normal;
}
html{
    font-family: 'SignikaNegativeLight';
    color: var(--gray-1);
}
*{
    font-family: 'SignikaNegativeLight';
    color: var(--white);
}
h1,h2,h3,h4,h5,h6{
    font-family: 'AtkinsonHyperlegibleRegular'
}
`;

export default Typography;