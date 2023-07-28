import styled from 'styled-components';
import BREAKPOINTS from '../../assets/breakPoints';

export const StyledModal = styled.div`
  width: 45rem;
  height: calc(100vh - 21.1rem);
  position: fixed;
  right: 0rem;
  background-color: var(--white);
  color: var(--background);
  padding: 3rem;

  @media screen and (${BREAKPOINTS.DESKTOP}) {
    width: 40rem;
  }

  @media screen and (${BREAKPOINTS.LAPTOP_L}) {
    width: 40rem;
  }

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    width: 100%;
  }
`;

export const ModalImage = styled.div`
  width: 100%;
  height: 25rem;
  margin-bottom: 2rem;

  @media screen and (${BREAKPOINTS.MOVIL_L}) {
    height: 15rem;
  }

  @media screen and (${BREAKPOINTS.MOVIL_S}) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3rem;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const FlagContainer = styled.div`
  margin-right: 2rem;
`;

export const Title = styled.div`
  h3 {
    font-size: 3rem;
    color: var(--accent);
  }

  p {
    font-size: 2rem;
  }
`;

export const ModalFeature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  p:first-child {
    color: var(--accent);
    font-size: 3rem;
    font-weight: 600;
    margin-right: 2rem;

    @media screen and (${BREAKPOINTS.MOVIL_L}) {
      font-size: 2rem;
    }
  }

  p:last-child {
    font-size: 2.8rem;
    @media screen and (${BREAKPOINTS.MOVIL_L}) {
      font-size: 1.8rem;
    }
  }
`;
