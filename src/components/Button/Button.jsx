import React from 'react';
import BodyText from '../BodyText/BodyText';
import './Button.scss';

const Button = props =>{
  const {title, onClick, className, href} = props;

  const Comp = () => (
    <button
      onClick = { href ? null : onClick}
      className = { `primary-button ${className || ""}` }
    >
      <BodyText>{title}</BodyText>
    </button>
  )
  
  return(
      href ? (
        <a href={href}>
          <Comp />
        </a>
      ) : (
        <Comp />
      )
    )
}

export default Button;