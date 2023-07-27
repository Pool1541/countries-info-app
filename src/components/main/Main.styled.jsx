import styled from 'styled-components';
import BREAKPOINTS from '../../assets/breakPoints';

export const StyledMain = styled.main`
  margin-left: ${({ isActive }) => (isActive ? '35rem' : '0')};
  min-height: 100vh;
  padding: 5rem;
  background-color: var(--primary);
  transition: margin 0.3s ease;
  overflow: hidden;

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    padding: 5rem 2rem;
  }

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    margin-left: ${({ isActive }) => (isActive ? '30rem' : '0')};
  }
`;
