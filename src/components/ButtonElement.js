import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#e83b36' : 'white')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '4 px 48px' : '12px 30px')};
    margin: 20px;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`

export const SimpleButton = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#e83b36' : 'white')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '4 px 48px' : '12px 30px')};
    margin: 20px;
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const SimpleButton2 = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#e83b36' : 'white')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '4 px 48px' : '12px 30px')};
    margin: 20px;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`