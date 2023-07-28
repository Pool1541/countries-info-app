import styled from 'styled-components';

export const StyledTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    white-space: nowrap;
    font-size: clamp(3rem, 5vw, 8rem);
    color: var(--accent);
  }
`;
