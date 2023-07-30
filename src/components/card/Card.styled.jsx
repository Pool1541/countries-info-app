import styled from 'styled-components';
import BREAKPOINTS from '../../assets/breakPoints';

export const StyledCard = styled.button`
  max-width: 35rem;
  height: 250px;
  overflow: hidden;
  border-radius: 3rem;
  box-shadow: -2px -1px 10px 2px #00000052;

  @media screen and (${BREAKPOINTS.LAPTOP_M}) {
    height: 200px;
  }
`;

export const Thumbnail = styled.div`
  height: 60%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  background-color: var(--white);
  padding: 2rem 3rem;
`;

export const FlagContainer = styled.div`
  width: 70px;

  margin-right: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardTitle = styled.div`
  width: 20rem;
  text-align: left;
  h3 {
    color: var(--accent);
    font-size: clamp(2rem, 2.5vw, 2.7rem);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    font-size: clamp(1.8rem, 2.5vw, 2.3rem);
    color: var(--background-hover);
  }
`;
