import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/breakPoints';

export const StyledNavbar = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 30rem;
  border-radius: 5rem;
  background-color: var(--background-hover);
  color: var(--white);
  font-size: 3rem;
  font-weight: 600;
  transition: all 0.2s ease;
  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    width: 20rem;
    height: 20rem;
    font-size: 2rem;
  }

  &:hover {
    background-color: var(--background);
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

export const Text = styled.div`
  p {
    font-size: 2rem;
  }
`;
