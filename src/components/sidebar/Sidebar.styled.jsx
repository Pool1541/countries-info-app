import styled from 'styled-components';
import BREAKPOINTS from '../../assets/breakPoints';

export const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 35rem;
  background-color: var(--background);
  color: var(--text);
  padding: 3.5rem;
  transform: ${({ isActive }) => (isActive ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    width: 30rem;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 9rem;
  background-color: var(--white);
  color: var(--background);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
  }
`;

export const Navbar = styled.nav`
  margin-top: 4rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      display: block;
      padding-left: 3rem;
      font-size: 3rem;
      font-weight: bold;
      padding: 1rem 0 1rem 3rem;
      border-radius: 1rem;
      transition: all 0.1s ease;
    }

    a:hover {
      background-color: var(--background-hover);
    }

    a.active {
      background-color: var(--white);
      color: var(--background);
    }
  }
`;

export const ToggleButton = styled.button`
  background-color: var(--background-hover);
  padding: 1rem;
  border-radius: 1rem;
  position: absolute;
  top: 6.3rem;
  right: -5.5rem;
  flex-direction: column;
  gap: 7px;
  display: none;
  z-index: 10000;

  @media screen and (${BREAKPOINTS.LAPTOP_L}) {
    display: flex;
  }

  div {
    width: 3rem;
    height: 0.2rem;
    opacity: 1;
    background: var(--white);
    transition: all 0.3s ease;
  }

  div:first-child {
    transform: ${({ isActive }) => (isActive ? 'rotate(-45deg) translate(-8px, 6px)' : 'none')};
  }

  div:nth-child(2) {
    opacity: ${({ isActive }) => (isActive ? '0' : '1')};
  }

  div:last-child {
    transform: ${({ isActive }) => (isActive ? 'rotate(45deg) translate(-7px, -5px)' : 'none')};
  }
`;
