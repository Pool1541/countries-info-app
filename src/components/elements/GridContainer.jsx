import styled from 'styled-components';
import BREAKPOINTS from '../../assets/breakPoints';

export const GridContainer = styled.div`
  flex: 1 1 auto;
  margin-top: 8rem;
  margin-right: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  position: relative;
  justify-items: center;
  overflow: hidden;

  @media screen and (${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  }

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    grid-template-columns: 1fr;
  }
`;
