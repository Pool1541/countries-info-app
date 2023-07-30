import styled from 'styled-components';
import BREAKPOINTS from '../../assets/breakPoints';

export const StyledMain = styled.main`
  margin-left: ${({ isActive }) => (isActive ? '35rem' : '0')};
  min-height: 100vh;
  padding: 5rem 0 5rem 5rem;
  background-color: var(--primary);
  transition: margin 0.3s ease;

  @media screen and (${BREAKPOINTS.TABLET_L}) {
    margin-left: 0;
    padding: 5rem 2rem;
  }
`;
