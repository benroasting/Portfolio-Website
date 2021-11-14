import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

const NavBarStyles = styled.div`
    position: fixed;
    z-index: 100;   
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    padding: 1rem 0;
    background: var(--sky-blue);
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 100;
        text-align: center;
        li{
            display: inline-block; 
            border-radius: 8px;
            transition: .3s ease background-color;
            :hover{
                background-color: var(--lt-yellow);
            }
        }
    }
        a{
            display: inline-block;
            font-family: 'AtkinsonHyperlegibleRegular';
            padding: 1rem 2rem;
            font-size: 2rem;
            color: var(--dark-bg);
            outline: none;
        }
        .active{
            color: var(--white);
        }
    .responsiveIcon{
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline: none;
    }
    .closeNavIcon{
        display: none;
    }
    @media only screen and (max-width: 768px) {
        height: 100px;
        .hide-item{
            transform: translateY(calc(-100% - var(--top)));
        }
        .responsiveIcon {
            display: block;
        }
        .navItems{
            --top: 1rem;
            transition: .3s ease transform;
            background-color: var(--sky-blue);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
            .closeNavIcon {
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 1rem;
            }
        }
    }  
`;

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);

    const [scrollNav, setScrollNav] = useState(false);

    useEffect(() => {
        function changeNav() {
            if(window.scrollY >= 100) {
                setScrollNav(true)
            } else {
                setScrollNav(false)
            }
        }
        window.addEventListener('scroll', changeNav)
        return () => window.removeEventListener('scroll', changeNav)
}, [scrollNav])
    return (
    <NavBarStyles>
        <div className="home" id="home">
            <div 
                className="responsiveIcon"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
            >
                <MdMenu />
            </div>
            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
                <div 
                    className="closeNavIcon"
                    onClick ={() => setShowNav(!showNav)}
                    role= "button"
                    onKeyDown = {() => setShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose />
                </div>
                <li className="nav-item active">
                    <Link 
                    className="nav-link" onClick={() => {scroll.scrollToTop()}}
                    activeClass="active"
                    to="home"
                    smooth={true}
                    spy={true}
                    hashSpy={true}
                    exact="true"
                    offset={-100}
                    duration={500}
                    >{" "}
                    Home</Link>
                </li>
                <li className="nav-item active">
                    <Link 
                    className="nav-link"
                    activeClass="active"
                    to="about"
                    smooth={true}
                    spy={true}
                    hashSpy={true}
                    exact="true"
                    offset={-100}
                    duration={500}
                    >{" "}
                    About</Link>
                    {/* <NavLink 
                        to="about"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >About</NavLink> */}
                </li>
                <li className="nav-item active">
                    <Link 
                    className="nav-link"
                    activeClass="active"
                    to="projects"
                    smooth={true}
                    spy={true}
                    hashSpy={true}
                    exact="true"
                    offset={-100}
                    duration={500}
                    >{" "}
                    Projects</Link>
                    {/* <NavLink 
                        to="projects"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >Projects</NavLink> */}
                </li>
                <li className="nav-item active">
                    <Link 
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    spy={true}
                    hashSpy={true}
                    exact="true"
                    offset={-100}
                    duration={500}
                    >{" "}
                    Contact
                    </Link>
                    {/* <NavLink 
                        to="contact"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >Contact</NavLink> */}
                </li>
            </ul>
        </div>  
    </NavBarStyles>
    )
};
