import React from 'react';
import BodyText from '../BodyText/BodyText';
import Button from '../Button/Button';
import NavTogglerIcon from '../NavTogglerIcon/NavTogglerIcon';
import TitleText from '../TitleText/TitleText';
import './Navbar.scss';

export const links = [
    {
      title: "Governance",
      subLinks: [
        {
          name: "Forum",
          href: ''
        },
        {
          name: "DAO",
          href: "https://discord.gg/T7RQ8hMamB"
        },
        {
          name: "Tokenomics",
          href: 'https://blog.honey.finance'
        }
      ]
    },
    {
      title: "Developer",
      subLinks: [
        {
          name: "Honey Labs",
          href: ''
        },
        {
          name: "Documentation",
          href: "https://docs.honey.finance/"
        },
        {
          name: 'Github',
          href: 'https://github.com/honey-labs'
        }
      ]
    },
    {
      title: "Blog",
      href: "https://blog.honey.finance",
    },
]

const Navbar = props =>{
  const { toggleMenuHidden, menuHidden } = props;
    return(
        <nav>
          <TitleText>Honey Finance</TitleText>
          <ul className = "nav-links-pc">
            {
              links.map((link, i) => (
                <li key={i}>
                  {
                    link.href ? (
                      <a href={link.href}><BodyText>{link.title}</BodyText></a>
                    ) : (
                      <BodyText>{link.title}</BodyText>
                    )
                  }
                  {
                    link.subLinks &&
                    <div className="dropdown">
                      <div className="content">
                      {
                        link.subLinks.map((a, i) => (
                          a.href ? (
                            <Button key={i} title={a.name} href={a.href} />
                          ) : (
                            <div key={i} className="coming-soon-btn-container">
                              <Button className="link-btn" title={a.name} />
                              <Button className="coming-soon-btn" title="Coming soon" />                              
                            </div>
                          )
                        ))
                      }                        
                      </div>

                    </div>
                  }
                </li>
              ))
            }
          </ul>
          <a href='https://app.honey.finance'>
            <Button title="Launch app" onClick={()=>{}} /> 
          </a>
          <div onClick = {toggleMenuHidden} className = "toggle-icon">
            <NavTogglerIcon hidden={menuHidden} />
          </div>
        </nav>
    )
}

export default Navbar;