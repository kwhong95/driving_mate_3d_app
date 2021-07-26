import React from "react"
import styled from "styled-components"
import IMG from '../assets/image/darkLogo.png'



const LogoImg = styled.img`
  width: 7em;
  height: 7em;
`

const Logo = () => {
  return <LogoImg src={IMG} alt='logo' />
}

export default Logo