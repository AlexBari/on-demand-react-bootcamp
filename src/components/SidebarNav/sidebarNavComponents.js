import styled from 'styled-components';

export const SideBarNavWrapper = styled.div`
display: none;
@media screen and (max-width: 980px) {
  display: flex;
}`;

export const SidebarBlock = styled.div`
    position: fixed;
    height: 90%;
    top: 50px;
    width: 255px;
    background: white;
    transition: all .35s ease-out;
    left: ${props => props.isSideBar ? '0' : '-260px'};
    z-index: 200;
    & a {
        display: flex;
        align-content: flex-start;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.9);
        padding: 1rem 1.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    & a:hover {
        color: red;
    }
    @media screen and (max-width: 980px) {
         height: 100%;
    }
`;

export const HamburgerSpan = styled.span`
    width: 40px;
    display: flex;
    cursor: pointer;
    margin-right: 1rem;
    margin-left: 1rem;
`;

export const OverlayDiv = styled.div`
    z-index: 199;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    position: fixed;
    overflow: hidden;
`;