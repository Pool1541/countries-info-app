import styled from 'styled-components';

export const StyledCard = styled.div`
  height: 250px;
  overflow: hidden;
  border-radius: 3rem;
  box-shadow: -2px -1px 10px 2px #00000052;
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
  height: 50px;
  margin-right: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardTitle = styled.div`
  h3 {
    color: var(--accent);
    font-size: 2.7rem;
  }

  p {
    font-size: 2.3rem;
    color: var(--background-hover);
  }
`;
