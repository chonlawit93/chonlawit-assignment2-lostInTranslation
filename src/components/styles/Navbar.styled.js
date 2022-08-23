import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'




export const Nav = styled.nav`
    background: #FFC75F;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    border-bottom: 2px  solid grey;
`

export const NavTitleLogo = styled.div`
    display: flex;
  
`
export const NavTitle = styled.h1`
    font-family: 'Love Ya Like A Sister', cursive;

`


export const NavImage = styled.img`
    width: 70px;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: grey;
    }
`


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`

export const NavProfile = styled.div`
    display: flex;
    align-items: center;

`
export const NavBtnLogout = styled.button`
    border-radius: 4px;
    background: #845EC2;
    padding: 10px 22px;
    color: #fff;
    border: none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`



