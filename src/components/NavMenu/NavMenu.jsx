import { useRef, useEffect, useState } from "react"
import "./NavMenu.scss"
import gsap from "gsap"
import { links } from "../Navbar/Navbar"
import TitleText from "../TitleText/TitleText"
import BodyText from "../BodyText/BodyText"
import SocialsContainer from "../SocialsContainer/SocialsContainer"

const NavMenu = (props) => {
  const menuRef = useRef(null);
  const {hidden, toggleHidden} = props;
  const tl = useState(() => gsap.timeline({ paused: true }))[0]

  useEffect(() => {
    tl.to(menuRef.current, {
      y: 0,
      duration: 1.3,
      ease: "power3.inOut",
    })
  }, [tl])

  useEffect(() => {
    if (!hidden) {
      tl.timeScale(1).play()
    } else {
      tl.timeScale(2).reverse()
    }
  }, [hidden])

  const onLinkClick = () => {
    toggleHidden()
  }

  return (
    <div ref={menuRef} className= "navMenu">
      <div className="content">
        <div className="navListContainer">
          <ul>
            {links.map((link, i) => (
              <li key={i} onClick={() => onLinkClick()}>
                {
                  link.subLinks ?
                  (
                    <div className="link-item-with-sublinks">
                      <BodyText>{link.title}</BodyText>
                      <div className="sub-links-container">
                        {
                          link.subLinks.map((subLink, i) => (
                            subLink.href ? (
                                <a key={i} href={subLink.href}>
                                  <TitleText>{subLink.name}</TitleText>
                                </a>                              
                            ) : (
                              <TitleText key={i} className="disabled-btn-text">
                                {subLink.name}
                              </TitleText>
                            )
                          ))
                        }
                        <hr />
                      </div>
                    </div>
                  ) : (
                    <a  href={link.href}>
                      <TitleText>{link.title}</TitleText>
                    </a>
                  )            
                }
              </li>
            ))}
          </ul>
        </div>
        {/* <SocialsContainer /> */}
      </div>
    </div>
  )
}

export default NavMenu
