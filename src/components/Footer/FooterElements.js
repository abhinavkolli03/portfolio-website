import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 2px 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    text-align: left;
    width: 500px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
    margin-top: 30px;
    margin-bottom: 30px;
    display: center;
`