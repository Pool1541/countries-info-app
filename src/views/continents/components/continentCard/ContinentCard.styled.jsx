import styled from 'styled-components';

export const StyledContinentCard = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 3rem;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    border-radius: 3rem;
  }
`;

export const ContinentName = styled.div`
  position: absolute;
  bottom: -3.5rem;
`;
