import styled from 'styled-components';
import BREAKPOINTS from '../../assets/breakPoints';

export const GridContainer = styled.div`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2.5rem;
  position: relative;

  @media screen and (${BREAKPOINTS.LAPTOP_L}) {
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  }
`;
