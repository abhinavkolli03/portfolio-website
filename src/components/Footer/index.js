import React from 'react'
import Social from '../Social'
import { FooterContainer, FooterWrap, FooterLinksContainer, 
    FooterLinksWrapper, FooterLinkItems, FooterLinkTitle } from './FooterElements'


const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <Social />
                        <FooterLinkTitle>©2022 Abhinav Kolli. All rights reserved.</FooterLinkTitle>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer