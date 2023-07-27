import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 35rem;
  background-color: var(--background);
  color: var(--text);
  padding: 3.5rem;
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
