import React, { useRef, useState, useEffect } from 'react';
import './NavTogglerIcon.scss';
import gsap from 'gsap';

const NavTogglerIcon = props =>{
    const svgRef = useRef(null);
    const {hidden} = props;;
    const tl = useState(gsap.timeline({paused: true}))[0];


    useEffect(()=>{
        const rectsRef = [...svgRef.current.children];
        tl
            .to(rectsRef[0], {
                duration: .4,
                y: (svgRef.current.clientHeight) / 2
            })
            .to(rectsRef[2], {
                duration: .4,
                y: -(svgRef.current.clientHeight) / 2
            }, '0')
            .set(rectsRef[1], {
                opacity: 0
            })
            .to(rectsRef[0], {
                transformOrigin: 'center',
                rotate: 45,
            }, 'same')
            .to(rectsRef[2], {
                transformOrigin: 'center',
                rotate: -45
            }, 'same')
    }, [tl])

    useEffect(()=>{
        if(!hidden){
            tl.play()
        }else{
            tl.reverse()
        }
    }, [hidden])

    return(
        <svg className = "toggle-svg" ref = {svgRef} width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="2" fill="url(#paint0_linear_0_1)"/>
        <rect y="8" width="25" height="2" fill="url(#paint1_linear_0_1)"/>
        <rect y="16" width="25" height="2" fill="url(#paint2_linear_0_1)"/>
        <defs>
        <linearGradient id="paint0_linear_0_1" x1="12.5" y1="0" x2="12.5" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE12D"/>
        <stop offset="1" stopColor="#FF7403"/>
        </linearGradient>
        <linearGradient id="paint1_linear_0_1" x1="12.5" y1="8" x2="12.5" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE12D"/>
        <stop offset="1" stopColor="#FF7403"/>
        </linearGradient>
        <linearGradient id="paint2_linear_0_1" x1="12.5" y1="16" x2="12.5" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE12D"/>
        <stop offset="1" stopColor="#FF7403"/>
        </linearGradient>
        </defs>
        </svg>
        
        
    )
}

export default NavTogglerIcon;